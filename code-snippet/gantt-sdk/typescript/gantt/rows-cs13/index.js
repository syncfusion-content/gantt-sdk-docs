var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '380px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  splitterSettings: {
    position: '75%'
  },
  rowDataBound: onRowDataBound,
});
ganttChart.appendTo('#Gantt');

function onRowDataBound(args) {
  const progress = (args.data).Progress;
  if (progress < 30) {
    args.row.classList.add('below-30');
  } else if (progress >= 30 && progress < 80) {
    args.row.classList.add('below-80');
  } else {
    args.row.classList.add('above-80');
  }
}