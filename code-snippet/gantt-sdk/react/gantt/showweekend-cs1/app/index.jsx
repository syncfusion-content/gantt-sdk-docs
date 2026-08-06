import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings = {
    showWeekend: false
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      timelineSettings={timelineSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>
      <Inject services={[]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));