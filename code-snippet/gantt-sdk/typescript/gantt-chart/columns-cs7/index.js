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
		splitterSettings:{
			columnIndex:3
		},
		height:'450px',
		columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
			{ field: 'Progress', headerText: 'Progress', width: '150',format: 'C' },
			{ field: 'StartDate', headerText: 'Start Date', width: '150', format: { format: 'dd/MM/yyyy', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: '150' }
        ]
});
ganttChart.appendTo('#Gantt');

