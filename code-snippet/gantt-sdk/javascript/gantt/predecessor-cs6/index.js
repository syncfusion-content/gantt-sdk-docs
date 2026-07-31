// Switch toggle.
var switchObj = new ej.buttons.Switch({ checked: false, change: Onchange, });
switchObj.appendTo('#switch');
function Onchange() {
  var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
  if (switchObj.checked) {
    ganttDependencyViewContainer.style.visibility = 'hidden';
  }
  else {
    ganttDependencyViewContainer.style.visibility = 'visible';
  }
}
var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '420px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    dependency: 'Predecessor',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'Predecessor', headerText: 'Depedency', width: '150' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
  ],
});
ganttChart.appendTo('#Gantt');