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
    parentID: 'ParentID'
  };
  function dataBound() {
    let labeltop = 100;
    let rightarrow = 110;
    const eventMarkerLabels = document.getElementsByClassName("e-span-label");
    const eventMarkerArrows = document.getElementsByClassName("e-gantt-right-arrow");
    for (let i = 0; i < eventMarkerLabels.length; i++) {
      const label = eventMarkerLabels[i] as HTMLElement;
      const arrow = eventMarkerArrows[i] as HTMLElement;
      if (label && arrow) {
        label.style.top = labeltop + "px";
        arrow.style.top = rightarrow + "px";
      }
      labeltop += 35;
      rightarrow += 35;
    }
  };
  const eventMarkerDay1 = new Date('4/10/2019');
  const eventMarkerDay2 = new Date('4/10/2019');
        return <GanttComponent dataSource={data} taskFields={taskFields} height = '450px' dataBound={dataBound}>
        <EventMarkersDirective>
              <EventMarkerDirective day={eventMarkerDay1} cssClass='e-custom-event-marker'  label='Project approval and kick-off' ></EventMarkerDirective>
              <EventMarkerDirective day={eventMarkerDay2} cssClass='e-custom-event-marker'  label='Project approval and kick-off' ></EventMarkerDirective>
        </EventMarkersDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));