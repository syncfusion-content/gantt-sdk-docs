var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '430px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  editSettings: {
    allowEditing: true,
    allowTaskbarEditing: true
  },
  toolbar: ['Edit', 'ZoomToFit'],
  actionComplete: function (args) {
    if ((args.action === "CellEditing" || args.action === "DialogEditing")
      && args.requestType === "save") {
      ganttChart.dataSource = GanttData;
      ganttChart.fitToProject();
    }
  },
  taskbarEdited: function (args) {
    if (args) {
      ganttChart.dataSource = GanttData;
      ganttChart.fitToProject();
    }
  }
});

ganttChart.appendTo('#Gantt');