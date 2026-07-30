var ganttChart = new ej.gantt.Gantt({
        dataSource: ganttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
		splitterSettings:{
			columnIndex:4
		}
		
});
ganttChart.appendTo('#Gantt');