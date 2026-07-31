ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
		    parentID: 'ParentID',
            expandState: 'isExpand'
        },
        enableMultiTaskbar: true,
    });
ganttChart.appendTo('#Gantt');