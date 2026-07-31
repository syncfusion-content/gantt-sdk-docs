ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			endDate:'EndDate',
			duration:'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
		editSettings: {
		   allowEditing:true,
		   allowTaskbarEditing:true
        },
		allowUnscheduledTasks:true
    });
ganttChart.appendTo('#Gantt');