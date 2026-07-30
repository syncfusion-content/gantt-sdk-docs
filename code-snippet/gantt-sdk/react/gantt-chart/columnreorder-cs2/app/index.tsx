import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: any = {
    position: '75%'
  };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      allowReordering={true}
      treeColumnIndex={1}
      height="430px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" allowReordering={false} />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
        <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
      </ColumnsDirective>
      <Inject services={[Reorder]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));