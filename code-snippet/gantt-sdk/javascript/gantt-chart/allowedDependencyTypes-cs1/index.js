var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  allowedDependencyTypes: ['SF'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  allowSelection: true,
  gridLines: "Both",
  highlightWeekends: true,
  labelSettings: {
    leftLabel: 'TaskName',
    taskLabel: 'Progress'
  },
  height: '550px',
  projectStartDate: new Date('03/21/2019'),
  projectEndDate: new Date('05/30/2019')
});
ganttChart.appendTo('#Gantt');
