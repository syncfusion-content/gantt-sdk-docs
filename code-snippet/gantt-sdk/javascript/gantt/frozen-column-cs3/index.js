var taskSettings = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  endDate: 'EndDate',
  dependency: 'Predecessor',
  progress: 'Progress',
  parentID: 'ParentID',
  resourceInfo: 'Resources'
};

var splitterSettings = {
  position: '65%'
};

var labelSettings = {
  taskLabel: 'Progress'
};

var resourceFields = {
  id: 'resourceId',
  name: 'resourceName'
};

var ganttChart = new ej.gantt.Gantt({
  height: '430px',
  dataSource: GanttData,
  taskFields: taskSettings,
  treeColumnIndex: 1,
  splitterSettings: splitterSettings,
  gridLines: 'Both',
  resources: resourceCollection,
  resourceFields: resourceFields,
  labelSettings: labelSettings,

  columns: [
    { field: 'TaskID', headerText: 'Task ID', freeze: 'Left' },
    { field: 'TaskName', headerText: 'Task Name', width: 200 },
    { field: 'StartDate', headerText: 'Start Date', width: 130 },
    { field: 'Duration', headerText: 'Duration', width: 110 },
    { field: 'EndDate', headerText: 'End Date', width: 130 },
    { field: 'Progress', headerText: 'Progress', width: 110, freeze: 'Fixed' },
    { field: 'Predecessor', headerText: 'Dependency', width: 120 },
    { field: 'Resources', headerText: 'Assignee', freeze: 'Right' }
  ]
});

ganttChart.appendTo('#Gantt');