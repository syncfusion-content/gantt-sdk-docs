import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const updateEventMarker = () => {
    const label = document.getElementsByClassName('e-span-label')[1] as HTMLElement;
    const arrow = document.getElementsByClassName('e-gantt-right-arrow')[1] as HTMLElement;
    label.style.top = '100px';
    arrow.style.top = '110px';
  };
  const actionComplete = () => {
    updateEventMarker();
  };
  const ganttRef = React.createRef();
  const dataBound = () => {
    updateEventMarker();
    ganttRef.current.fitToProject();
  };
  const eventMarkerDay1 = new Date('04/01/2019');
  const eventMarkerDay2 = new Date('04/09/2019');
  const eventMarkerDay3 = new Date('04/30/2019');
  const eventMarkerDay4 = new Date('05/20/2019');
  const projectStartDate = new Date('03/31/2019');
  const projectEndDate = new Date('07/18/2019');
        return <GanttComponent ref={ganttRef} dataSource={data} taskFields={taskFields} height = '450px' projectStartDate = { projectStartDate } projectEndDate = { projectEndDate } actionComplete={actionComplete} dataBound = {dataBound}>
        <EventMarkersDirective>
        <EventMarkerDirective day={eventMarkerDay1} cssClass='e-custom-event-marker'  label='Research phase research phase research phase' ></EventMarkerDirective>
              <EventMarkerDirective day={eventMarkerDay2} cssClass='e-custom-event-marker'  label='Design phase' ></EventMarkerDirective>
              <EventMarkerDirective day={eventMarkerDay3} cssClass='e-custom-event-marker'  label='Production phase' ></EventMarkerDirective>
              <EventMarkerDirective day={eventMarkerDay4} cssClass='e-custom-event-marker'  label='Sales and marketing phase' ></EventMarkerDirective>
        </EventMarkersDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));