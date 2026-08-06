import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Freeze } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '65%'
  };

  const labelSettings = {
    taskLabel: 'Progress',
    rightLabel: 'TaskName'
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={GanttData}
      taskFields={taskSettings}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
      allowSelection={false}
      gridLines="Both"
      labelSettings={labelSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" isFrozen={true} />
        <ColumnDirective field="TaskName" headerText="Task Name" width="220" isFrozen={true} />
        <ColumnDirective field="StartDate" headerText="Start Date" />
        <ColumnDirective field="Duration" headerText="Duration" />
        <ColumnDirective field="Progress" headerText="Progress" />
        <ColumnDirective field="Status" headerText="Status" isFrozen={true} />
      </ColumnsDirective>
      <Inject services={[ Freeze]} />
    </GanttComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));