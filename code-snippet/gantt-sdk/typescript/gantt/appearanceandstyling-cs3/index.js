var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
			dependency:'Predecessor',
            progress: 'Progress',
		    parentID: 'ParentID'
        },
		connectorLineBackground:"red",
		connectorLineWidth:3
});
ganttChart.appendTo('#Gantt');