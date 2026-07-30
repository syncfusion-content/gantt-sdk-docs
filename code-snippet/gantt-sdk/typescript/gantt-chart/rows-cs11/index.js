var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowRowDragAndDrop: true,
    treeColumnIndex:1,
    splitterSettings: {
      position: '75%'
    },
    rowDrop : (args) => {
        if (args.dropPosition === 'middleSegment') {
            args.cancel = true;
            ganttChart.reorderRows([args.fromIndex], args.dropIndex, 'above');
        }
    }
});
ganttChart.appendTo('#Gantt');