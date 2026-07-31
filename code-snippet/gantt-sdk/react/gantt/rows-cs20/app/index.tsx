import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { ganttData } from './datasource';

function App() {
  var gantt: GanttComponent = null;
  let messageRef: HTMLParagraphElement | null = null;
  var updateMessage = (text: string) => {
    if (messageRef) {
      messageRef.textContent = text;
    }
  };
  let hiddenRows: number[] = [];

  var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  var splitterSettings = { position: '75%' };

  var onCheckBoxChange = (args: ChangeEventArgs) => {
    if (!gantt) return;

    var rows = gantt.treeGrid.grid.getRowsObject();
    if (args.checked) {
      hiddenRows = [];
      rows.forEach((row: any, index: any) => {
        var task = row.data;
        if (task.TaskName === 'Perform Soil test') {
          var treeRow = gantt.treeGrid.getRowByIndex(index);
          var ganttRow = gantt.getRowByIndex(index);
          if (treeRow) (treeRow as HTMLElement).style.display = 'none';
          if (ganttRow) ganttRow.style.display = 'none';
          hiddenRows.push(index);
        }
      });
      if (hiddenRows.length > 0) {
        updateMessage(`Rows with task name 'Perform Soil test' have been hidden.`);
      }
    } else {
      hiddenRows.forEach(index => {
        var treeRow = gantt.treeGrid.getRowByIndex(index);
        var ganttRow = gantt.getRowByIndex(index);
        if (treeRow) (treeRow as HTMLElement).style.display = '';
        if (ganttRow) ganttRow.style.display = '';
      });
      hiddenRows = [];
      updateMessage('All hidden rows are now visible.');
    }
  };

  return (
    <div>
      <div className="controls" style={{ padding: '2px 0 20px 0' }}>
        <CheckBoxComponent label="Show / Hide Row" change={onCheckBoxChange} />
        <p style={{ color: "red" }} ref={el => (messageRef = el)}></p>
      </div>
      <GanttComponent
        id="ganttDefault"
        ref={g => gantt = g}
        dataSource={ganttData}
        taskFields={taskFields}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        height="430px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));