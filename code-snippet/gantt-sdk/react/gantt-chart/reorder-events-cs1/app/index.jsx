import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let ganttInstance;
  let messageElement;

  const taskFields = {
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

  const columnDragStart = (args) => {
    messageElement.textContent = 'columnDragStart event triggered';
    if (args.column.field === 'TaskName') {
      args.column.headerText = 'Project Task';
      messageElement.textContent = `Header text changed for column: ${args.column.field}`;
    }
  };

  const columnDrag = (args) => {
    messageElement.textContent = 'columnDrag event triggered';
    if (args.column.field === 'Duration') {
      args.column.allowReordering = false;
      messageElement.textContent = `Reordering disabled for column: ${args.column.field}`;
    }
  };

  const columnDrop = (args) => {
    messageElement.textContent = 'columnDrop event triggered';
    if (args.column.field === 'TaskID') {
      args.column.allowReordering = false;
      messageElement.textContent = `Reordering cancelled for column: ${args.column.field}`;
    }
  };

  return (
    <div>
      <div style={{ margin: '20px 0 10px 180px' }}>
        <p style={{ color: 'red' }} ref={(el) => (messageElement = el)}></p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <GanttComponent
          ref={(gantt) => (ganttInstance = gantt)}
          dataSource={data}
          taskFields={taskFields}
          splitterSettings={splitterSettings}
          allowReordering={true}
          treeColumnIndex={1}
          height="430px"
          columnDragStart={columnDragStart}
          columnDrag={columnDrag}
          columnDrop={columnDrop}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
          </ColumnsDirective>
          <Inject services={[Reorder]} />
        </GanttComponent>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));