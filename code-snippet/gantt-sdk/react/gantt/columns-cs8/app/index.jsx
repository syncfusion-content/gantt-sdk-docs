import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '75%'
  };

  return (
    <GanttComponent
      height="370px"
      dataSource={data}
      taskFields={taskSettings}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
      allowResizing={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
        <ColumnDirective
          field="TaskName"
          headerText="Task Name"
          textAlign="Left"
          width="290"
          hideAtMedia="(min-width: 700px)"
        />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
        <ColumnDirective
          field="Duration"
          headerText="Duration"
          textAlign="Right"
          width="90"
          hideAtMedia="(max-width: 500px)"
        />
        <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="150" />
      </ColumnsDirective>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));