var ganttChart = new ej.gantt.Gantt({
	dataSource: GanttData,
	height: '450px',
	splitterSettings: {
		position: '75%'
	},
	taskFields: {
		id: 'TaskID',
		name: 'TaskName',
		startDate: 'StartDate',
		duration: 'Duration',
		progress: 'Progress',
		parentID: 'ParentID'
	},
	treeColumnIndex: 1,
});

ganttChart.appendTo('#Gantt');