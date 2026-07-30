import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const gantt: GanttComponent = null;
  const taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings: object = {
    position: '75%'
  };

  return (
    <div>
      <GanttComponent
        id="gantt"
        height="370px"
        dataSource={data}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        collapseAllParentTasks={true}
        ref={g => gantt = g}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));