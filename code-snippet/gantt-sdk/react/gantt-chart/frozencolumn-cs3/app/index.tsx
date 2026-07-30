import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, SplitterSettings, Freeze } from '@syncfusion/ej2-react-gantt';
import { GanttData, resourceCollection } from './datasource';

function App() {
  const taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    dependency: 'Predecessor',
    progress: 'Progress',
    parentID: 'ParentID',
    resourceInfo: 'Resources'
  };

  const splitterSettings: SplitterSettings = {
    position: '65%'
  };

  const labelSettings: object = {
    taskLabel: 'Progress'
  };

  const resourceFields: object = {
    id: 'resourceId',
    name: 'resourceName'
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={GanttData}
      taskFields={taskSettings}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
      gridLines="Both"
      resources={resourceCollection}
      resourceFields={resourceFields}
      labelSettings={labelSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" freeze="Left" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="200" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="130" />
        <ColumnDirective field="Duration" headerText="Duration" width="110" />
        <ColumnDirective field="EndDate" headerText="End Date" width="130" />
        <ColumnDirective field="Progress" headerText="Progress" width="110" freeze="Fixed" />
        <ColumnDirective field="Predecessor" headerText="Dependency" width="120" />
        <ColumnDirective field="Resources" headerText="Assignee" freeze="Right" />
      </ColumnsDirective>
      <Inject services={[ Freeze ]} />
    </GanttComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));