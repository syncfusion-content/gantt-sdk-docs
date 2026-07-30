import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = { position: '75%' };

  const nameTemplate = (props) => (
    <div className="chip">
      <ChipListComponent id="chip" text={props.TaskName} />
    </div>
  );

  return (
    <GanttComponent height="430px" dataSource={data} taskFields={taskFields} treeColumnIndex={1} splitterSettings={splitterSettings}>
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" template={nameTemplate} />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));