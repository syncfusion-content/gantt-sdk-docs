var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			durationUnit:'DurationUnit',
			parentID: 'ParentID'
        },
		splitterSettings:{
			columnIndex:4
		}
		
});
ganttChart.appendTo('#Gantt');