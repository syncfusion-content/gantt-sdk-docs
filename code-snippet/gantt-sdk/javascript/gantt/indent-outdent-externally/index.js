ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
  dataSource: ganttData,
  height: '380px',
  treeColumnIndex:1,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
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
  editSettings: {
    allowEditing: true,
  },
  splitterSettings: {
    position: '75%'
  }
});
ganttChart.appendTo('#Gantt');

let indent = new ej.buttons.Button();
indent.appendTo('#indent');

document.getElementById('indent').addEventListener('click', () => {
  ganttChart.selectRow(2);
  ganttChart.indent();
});

let outdent = new ej.buttons.Button();
outdent.appendTo('#outdent');

document.getElementById('outdent').addEventListener('click', () => {
  ganttChart.selectRow(2);
  ganttChart.outdent();
})