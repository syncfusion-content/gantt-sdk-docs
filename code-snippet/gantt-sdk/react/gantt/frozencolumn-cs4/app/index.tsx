import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Freeze } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  const taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    dependency: 'Predecessor',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: object = {
    position: '65%'
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
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" freeze="Left" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="200" freeze="Left" />
        <ColumnDirective field="StartDate" headerText="Start Date" />
        <ColumnDirective field="Duration" headerText="Duration" />
        <ColumnDirective field="EndDate" headerText="End Date" />
        <ColumnDirective field="Progress" headerText="Progress" freeze="Right" />
        <ColumnDirective field="Status" headerText="Status" />
      </ColumnsDirective>
      <Inject services={[ Freeze ]} />
    </GanttComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));