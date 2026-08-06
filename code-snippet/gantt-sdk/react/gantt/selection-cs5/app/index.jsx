import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
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
  const selectionSettings = {
    mode: 'Row',
    type: 'Single'
  };
  return (
    <GanttComponent
      height="370px"
      dataSource={data}
      taskFields={taskSettings}
      selectionSettings={selectionSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" width="90" textAlign="Right" />
        <ColumnDirective field="TaskName" width="250" />
        <ColumnDirective field="StartDate" width="150" format="yMd" />
        <ColumnDirective field="Duration" width="120" textAlign="Right" />
        <ColumnDirective field="Progress" width="120" textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));