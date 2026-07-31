import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, TaskFieldsModel, TooltipSettingsModel, EventMarkerModel } from '@syncfusion/ej2-react-gantt';

import { data } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };

  const tooltipSettings: TooltipSettingsModel = {
    showTooltip: true
  };

  const eventMarkers: EventMarkerModel[] = [
    {
      day: '04/10/2019',
      label: 'Project approval and kick-off'
    }
  ];

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      renderBaseline={true}
      baselineColor="red"
      treeColumnIndex={1}
      tooltipSettings={tooltipSettings}
      eventMarkers={eventMarkers}
    >
      <Inject services={[Selection, DayMarkers]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));