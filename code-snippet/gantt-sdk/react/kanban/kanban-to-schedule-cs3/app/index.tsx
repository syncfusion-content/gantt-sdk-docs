import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest, removeClass } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DragEventArgs, Kanban } from "@syncfusion/ej2-react-kanban";
import {
  ScheduleComponent, ResourcesDirective, ResourceDirective,
  ViewsDirective, ViewDirective, Inject, TimelineViews,
  Resize, DragAndDrop, TimelineMonth
} from '@syncfusion/ej2-react-schedule';
import { kanbanData, scheduleData } from './datasource';

class App extends React.Component<{}, {}>{
  public kanbanObj: Kanban | null;
  public scheduleObj: ScheduleComponent | null;
   constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
        this.scheduleDataSource = extend([], scheduleData, null, true);
        this.externalKanbanDropId = ["#Schedule"];
    }
    private departmentData: Object[] = [
      { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
      { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
    ];
    private consultantData: Object[] = [
      { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
      { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
      { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
      { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
      { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
      { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
    ];
    private getConsultantName(value: ResourceDetails | TreeViewArgs): string {
      return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
    }

    private getConsultantDesignation(value: ResourceDetails): string {
      return (value as ResourceDetails).resourceData.Designation as string;
    }

    private resourceHeaderTemplate(props: any): JSX.Element {
      return (<div className="template-wrap"><div className="specialist-category"><div className="specialist-name">
        {this.getConsultantName(props)}</div><div className="specialist-designation">{this.getConsultantDesignation(props)}</div></div></div>);
    }
    private onKanbanDragStop(args: DragEventArgs): void {
       let scheduleElement: Element = closest(args.event.target as Element, '#Schedule');
        if (scheduleElement) {
            this.kanbanObj.deleteCard(args.data);
            this.scheduleObj.openEditor(args.data[0], 'Add', true);
            args.cancel = true;
        }
    }
    private scheduleDragStop(args: ScheduleDragEventArgs): void {
        let kanbanElement: Element = closest(args.event.target as Element, '#Kanban');
        if (kanbanElement) {
             this.scheduleObj.deleteEvent(args.data.Id);
             removeClass([this.scheduleObj.element.querySelector('.e-selected-cell')], 'e-selected-cell');
             this.kanbanObj.openDialog('Add', args.data);
             args.cancel = true;
        }
    }
  render() {
    return <div>
          <div className="container-fluid">
                  <div className="row">
                      <div className="col-sm-6">
                        <h4>Kanban</h4>
                            <KanbanComponent id="Kanban" ref={kanban => this.kanbanObj = kanban} keyField="DepartmentName" dataSource={this.data} cardSettings={{ contentField: "Name", headerField: "Id" }} dragStop={this.onKanbanDragStop.bind(this)} externalDropId={this.externalKanbanDropId}>
                                <ColumnsDirective>
                                    <ColumnDirective headerText="GENERAL" keyField="GENERAL" />
                                </ColumnsDirective>
                            </KanbanComponent>
                      </div>
                    <div className="col-sm-6">
                    <h4>Schedule</h4>
                          <ScheduleComponent id="Schedule" ref={schedule => this.scheduleObj = schedule} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2018, 7, 1)}
                              currentView='TimelineDay' resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                                  eventSettings={{
                                    dataSource: this.scheduleDataSource,
                                    fields: {
                                      subject: { title: 'Patient Name', name: 'Name' },
                                      startTime: { title: "From", name: "StartTime" },
                                      endTime: { title: "To", name: "EndTime" },
                                      description: { title: 'Reason', name: 'Description' }
                                    }
                                  }}
                                  group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }}
                                  dragStop={this.scheduleDragStop.bind(this)} >
                                  <ResourcesDirective>
                                    <ResourceDirective field='DepartmentID' title='Department' name='Departments' allowMultiple={false}
                                      dataSource={this.departmentData} textField='Text' idField='Id' colorField='Color'>
                                    </ResourceDirective>
                                    <ResourceDirective field='ConsultantID' title='Consultant' name='Consultants' allowMultiple={false}
                                      dataSource={this.consultantData} textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'>
                                    </ResourceDirective>
                                  </ResourcesDirective>
                                  <ViewsDirective>
                                    <ViewDirective option='TimelineDay' />
                                    <ViewDirective option='TimelineMonth' />
                                  </ViewsDirective>
                                  <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop]} />
                          </ScheduleComponent>
                    </div>
                </div>
            </div>
        </div>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
