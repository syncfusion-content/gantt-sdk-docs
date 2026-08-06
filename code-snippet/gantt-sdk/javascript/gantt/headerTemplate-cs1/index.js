var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
		    startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			parentID:'ParentID'
        },
	    height:'450px',
		splitterSettings:{
		  columnIndex:4
		},
		columns: [
            { field: 'TaskName', headerTemplate: '#projectName', width: '150' },
			{ field: 'StartDate', headerTemplate: '#dateTemplate', width: '150' },
            { field: 'Duration',headerTemplate: '#durationTemplate', headerText: 'Duration', width: '150' },
            { field: 'Progress',headerTemplate: '#progressTemplate',  headerText: 'Progress', width: '150' },
        ],
		
	});
ganttChart.appendTo('#Gantt');