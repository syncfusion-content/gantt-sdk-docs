import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-react-grids';
import { projectNewData } from './datasource';

function App() {
  let ganttRef: GanttComponent | null = null;
  let message = '';

  const data: object[] = projectNewData;
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings = { position: '75%' };

  const updateMessage = (text: string) => {
    message = text;
    const msgElement = document.getElementById('message');
    if (msgElement) msgElement.textContent = message;
  };

  const rowDragStartHelper = (args: RowDragEventArgs): void => {
    updateMessage('rowDragStartHelper event triggered');
    const draggedTask = (args.data as any)[0];
    if (draggedTask.TaskID === 2) {
      args.cancel = true;
      updateMessage('Drag cancelled for TaskID 2');
    }
  };

  const rowDragStart = (args: RowDragEventArgs): void => {
    updateMessage('rowDragStart event triggered');
    const draggedTask = (args.data as any)[0];
    if (draggedTask.Progress < 50 && args.rows.length) {
      args.rows.forEach((row: any) => {
        (row as HTMLElement).style.background = '#ec9ec8ff';
      });
    }
  };

  const rowDrag = (args: RowDragEventArgs): void => {
    updateMessage('rowDrag event triggered');
    if (args.rows.length && (args.data as any)[0].Progress > 50) {
      args.rows.forEach((row: any) => {
        (row as HTMLElement).style.background = '#c5f4fdde';
      });
    }
  };

  const rowDrop = (args: RowDragEventArgs): void => {
    updateMessage('rowDrop event triggered');
    const draggedTask = (args.data as any)[0];
    if (draggedTask.TaskID === 4) {
      updateMessage('Drop cancelled for TaskID 4');
      args.cancel = true;
    }
  };

  return (
    <div>
      <p style={{ color: 'red' }} id="message">{message}</p>
      <GanttComponent
        ref={(gantt) => ganttRef = gantt}
        height="450px"
        dataSource={data}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        allowRowDragAndDrop={true}
        rowDragStartHelper={rowDragStartHelper}
        rowDrop={rowDrop}
        rowDragStart={rowDragStart}
        rowDrag={rowDrag}
        taskFields={taskSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" isPrimaryKey={true} width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
        <Inject services={[RowDD, Edit, Selection]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));