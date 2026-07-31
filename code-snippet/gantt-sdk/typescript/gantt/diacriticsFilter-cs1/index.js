ej.gantt.Gantt.Inject(ej.gantt.Filter);
	
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        },
		filterSettings: {
           ignoreAccent:true
        },
		allowFiltering: true
    });
ganttChart.appendTo('#Gantt');