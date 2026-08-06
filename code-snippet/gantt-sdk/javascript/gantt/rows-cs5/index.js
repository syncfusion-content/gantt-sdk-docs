var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
	    taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			expandState:'isExpand',
			parentID: 'ParentID'
        }
});
ganttChart.appendTo('#Gantt');