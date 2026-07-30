import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  SplitterSettingsModel
} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = {
    position: '75%'
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width={90} />
        <ColumnDirective field="TaskName" headerText="Task Name" width={290} />
        <ColumnDirective field="StartDate" headerText="Start Date" width={120} />
        <ColumnDirective field="Duration" headerText="Duration" width={90} />
        <ColumnDirective field="Progress" headerText="Progress" width={120} />
      </ColumnsDirective>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));