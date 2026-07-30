import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App () {
  const ganttRef = null;
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    expandState: 'isExpand',
    parentID: 'ParentID'
  };
  const splitterSettings = {
    position: '75%'
  };

  return (
    <div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        ref={g => ganttRef = g}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));