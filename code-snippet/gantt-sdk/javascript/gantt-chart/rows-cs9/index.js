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
            parentID: 'parentID'
        },
        rowDragStartHelper: function(args){
            var record = args.data[0] ? args.data[0] : args.data;
            var taskId = record.ganttProperties.taskId;
            if (taskId <= 4) {
                args.cancel = true;
            }
        },
		allowRowDragAndDrop: true
});
ganttChart.appendTo('#Gantt');