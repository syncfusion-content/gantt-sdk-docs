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
  rowDataBound: rowDataBound,
});
ganttChart.appendTo('#Gantt');

function rowDataBound(args) {
   const rowElement = args.row;
   const rowData = args.data;
   if (rowData.hasChildRecords) {
    rowElement.classList.add('parent-row');
   } else {
    rowElement.classList.add('child-row');
   }
}