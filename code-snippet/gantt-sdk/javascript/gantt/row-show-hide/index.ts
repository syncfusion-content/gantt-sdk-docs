import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { CheckBox, CheckBoxChangeEventArgs } from '@syncfusion/ej2-buttons';
import { ganttData, GanttTask } from './datasource.ts';

Gantt.Inject(Edit, Selection);

const gantt = new Gantt({
  dataSource: ganttData,
  height: '380px',
  treeColumnIndex: 1,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
    { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
    { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
  ],
  splitterSettings: { position: '75%' },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
  },
  selectionSettings: { mode: 'Row', type: 'Single' }
});
gantt.appendTo('#Gantt');

const messageElement = document.getElementById('message') as HTMLElement;

let hiddenRowIndexes: number[] = [];

let checkbox: CheckBox = new CheckBox({ label: 'Small', cssClass: 'e-small', change: onCheckBoxChange });
checkbox.appendTo('#toggleRows');

function onCheckBoxChange(args: CheckBoxChangeEventArgs): void {
  if (!gantt || !gantt.treeGrid || !gantt.treeGrid.grid) return;

  const rowsObj = gantt.treeGrid.grid.getRowsObject();
  if (args.checked) {
    hiddenRowIndexes = [];
    rowsObj.forEach((rowObj: { data: GanttTask; }, index: number) => {
      const task = rowObj.data as GanttTask;
      if (task && task.TaskName === 'Perform Soil test') {
        const treeRow = gantt.treeGrid.getRowByIndex(index);
        if (treeRow) (treeRow as HTMLElement).style.display = 'none';
        const ganttRow = gantt.getRowByIndex(index);
        if (ganttRow) ganttRow.style.display = 'none';
        hiddenRowIndexes.push(index);
      }
    });

    if (hiddenRowIndexes.length > 0) {
      messageElement.textContent = `Rows with task name 'Perform Soil test' have been hidden.`;
    } else {
      messageElement.textContent = `No rows matched 'Perform Soil test'.`;
    }
  } else {
    hiddenRowIndexes.forEach((index) => {
      const treeRow = gantt.treeGrid.getRowByIndex(index);
      if (treeRow) (treeRow as HTMLElement).style.display = '';
      const ganttRow = gantt.getRowByIndex(index);
      if (ganttRow) ganttRow.style.display = '';
    });
    hiddenRowIndexes = [];
    messageElement.textContent = 'All hidden rows are now visible.';
  }
}
