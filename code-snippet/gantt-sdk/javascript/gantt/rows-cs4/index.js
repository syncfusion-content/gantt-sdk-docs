var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
	    collapseAllParentTasks: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        }
});
ganttChart.appendTo('#Gantt');