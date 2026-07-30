import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest, removeClass } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { kanbanData, scheduleData } from './datasource';
function App() {
    let kanbanObj;
    let scheduleObj;
    let data = extend([], kanbanData, null, true);
    let scheduleDataSource = extend([], scheduleData, null, true);
    let externalKanbanDropId = ["#Schedule"];
    let departmentData = [
        { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
        { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
    ];
    let consultantData = [
        { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
        { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
        { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
        { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
        { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
        { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
    ];
    function getConsultantName(value) {
        return value.resourceData[value.resource.textField];
    }
    function getConsultantDesignation(value) {
        return value.resourceData.Designation;
    }
    function resourceHeaderTemplate(props) {
        return (<div className="template-wrap"><div className="specialist-category"><div className="specialist-name">
      {getConsultantName(props)}</div><div className="specialist-designation">{getConsultantDesignation(props)}</div></div></div>);
    }
    function onKanbanDragStop(args) {
        let scheduleElement = closest(args.event.target, '#Schedule');
        if (scheduleElement) {
            kanbanObj.deleteCard(args.data);
            scheduleObj.openEditor(args.data[0], 'Add', true);
            args.cancel = true;
        }
    }
    function scheduleDragStop(args) {
        let kanbanElement = closest(args.event.target, '#Kanban');
        if (kanbanElement) {
            scheduleObj.deleteEvent(args.data.Id);
            removeClass([scheduleObj.element.querySelector('.e-selected-cell')], 'e-selected-cell');
            kanbanObj.openDialog('Add', args.data);
            args.cancel = true;
        }
    }
    return (<div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h4>Kanban</h4>
                  <KanbanComponent id="Kanban" ref={kanban => kanbanObj = kanban} keyField="DepartmentName" dataSource={data} cardSettings={{ contentField: "Name", headerField: "Id" }} dragStop={onKanbanDragStop.bind(this)} externalDropId={externalKanbanDropId}>
                      <ColumnsDirective>
                          <ColumnDirective headerText="GENERAL" keyField="GENERAL"/>
                      </ColumnsDirective>
                  </KanbanComponent>
            </div>
            <div className="col-sm-6">
              <h4>Schedule</h4>
              <ScheduleComponent id="Schedule" ref={schedule => scheduleObj = schedule} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2018, 7, 1)} currentView='TimelineDay' resourceHeaderTemplate={resourceHeaderTemplate.bind(this)} eventSettings={{
            dataSource: scheduleDataSource,
            fields: {
                subject: { title: 'Patient Name', name: 'Name' },
                startTime: { title: "From", name: "StartTime" },
                endTime: { title: "To", name: "EndTime" },
                description: { title: 'Reason', name: 'Description' }
            }
        }} group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }} dragStop={scheduleDragStop.bind(this)}>
                      <ResourcesDirective>
                        <ResourceDirective field='DepartmentID' title='Department' name='Departments' allowMultiple={false} dataSource={departmentData} textField='Text' idField='Id' colorField='Color'>
                        </ResourceDirective>
                        <ResourceDirective field='ConsultantID' title='Consultant' name='Consultants' allowMultiple={false} dataSource={consultantData} textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'>
                        </ResourceDirective>
                      </ResourcesDirective>
                      <ViewsDirective>
                        <ViewDirective option='TimelineDay'/>
                        <ViewDirective option='TimelineMonth'/>
                      </ViewsDirective>
                      <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop]}/>
              </ScheduleComponent>
            </div>
          </div>
        </div>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));