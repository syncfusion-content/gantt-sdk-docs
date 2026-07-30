var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
	     taskFields: {
			 id: 'TaskID',
			 name: 'TaskName',
			 startDate: 'StartDate',
			 duration: 'Duration',
			 progress: 'Progress',
			 parentID: 'ParentID'
        },
		rowHeight:50,
		splitterSettings:{
			columnIndex:3
		},
		height:'450px',
		columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
			{ field: 'Progress', headerText: 'Progress', width: '150',format: 'C' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
			{ field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' }
		]
});
ganttChart.appendTo('#Gantt');