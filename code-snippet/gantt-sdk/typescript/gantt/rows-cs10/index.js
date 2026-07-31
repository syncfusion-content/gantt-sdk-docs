var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
		height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        },
        rowDrop: function(args) {
            if (args.dropPosition == "middleSegment") {
                args.cancel = true;
            }
        },
		allowRowDragAndDrop: true
});
ganttChart.appendTo('#Gantt');