
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, TimelineSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const timelineSettings: TimelineSettingsModel = {
    timelineViewMode: 'Minutes'
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      timelineSettings={timelineSettings}
    >
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));