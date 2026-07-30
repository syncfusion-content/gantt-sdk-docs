import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings = {
    timelineViewMode: 'Year',
    timelineUnitSize: 70
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