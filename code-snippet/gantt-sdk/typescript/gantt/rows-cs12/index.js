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
    dataBound: dataBound,
});
ganttChart.appendTo('#Gantt');

function dataBound() {
  ganttChart.treeGrid.getRowByIndex(2).style.background = 'rgb(193, 228, 234)';
}