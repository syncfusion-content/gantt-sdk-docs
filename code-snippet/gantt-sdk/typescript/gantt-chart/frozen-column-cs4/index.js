var taskSettings = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  endDate: 'EndDate',
  dependency: 'Predecessor',
  progress: 'Progress',
  parentID: 'ParentID'
};

var splitterSettings = {
  position: '65%'
};

var ganttChart = new ej.gantt.Gantt({
  height: '430px',
  dataSource: GanttData,
  taskFields: taskSettings,
  treeColumnIndex: 1,
  splitterSettings: splitterSettings,
  allowSelection: false,
  gridLines: 'Both',

  columns: [
    { field: 'TaskID', headerText: 'Task ID', freeze: 'Left' },
    { field: 'TaskName', headerText: 'Task Name', width: 200, freeze: 'Left' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'EndDate', headerText: 'End Date' },
    { field: 'Progress', headerText: 'Progress', freeze: 'Right' },
    { field: 'Status', headerText: 'Status' }
  ]
});

ganttChart.appendTo('#Gantt');