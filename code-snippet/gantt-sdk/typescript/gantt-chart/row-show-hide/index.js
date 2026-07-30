ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({ 
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
ganttChart.appendTo('#Gantt');

const messageElement = document.getElementById('message');

let hiddenRowIndexes = [];

let checkbox = new ej.buttons.CheckBox({ label: 'Small', cssClass: 'e-small', change: onCheckBoxChange });
checkbox.appendTo('#toggleRows');

function onCheckBoxChange(args) {
  if (!ganttChart || !ganttChart.treeGrid || !ganttChart.treeGrid.grid) return;

  const rowsObj = ganttChart.treeGrid.grid.getRowsObject();
  if (args.checked) {
    hiddenRowIndexes = [];
    rowsObj.forEach((rowObj, index) => {
      const task = rowObj.data;
      if (task && task.TaskName === 'Perform Soil test') {
        const treeRow = ganttChart.treeGrid.getRowByIndex(index);
        if (treeRow) treeRow.style.display = 'none';
        const ganttRow = ganttChart.getRowByIndex(index);
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
      const treeRow = ganttChart.treeGrid.getRowByIndex(index);
      if (treeRow) treeRow.style.display = '';
      const ganttRow = ganttChart.getRowByIndex(index);
      if (ganttRow) ganttRow.style.display = '';
    });
    hiddenRowIndexes = [];
    messageElement.textContent = 'All hidden rows are now visible.';
  }
}