ej.gantt.Gantt.Inject(ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
	dataSource: GanttData,
	height: '450px',
	allowSorting: true,
	taskFields: {
		id: 'TaskID',
		name: 'TaskName',
		startDate: 'StartDate',
		duration: 'Duration',
		progress: 'Progress',
		dependency: 'Predecessor',
		parentID: 'ParentID'
	},
	sortSettings: {
		columns: [
			{ field: 'TaskID', direction: 'Descending' },
			{ field: 'TaskName', direction: 'Ascending' }
		]
	}
});

ganttChart.appendTo('#Gantt');

var clearBtn = new ej.buttons.Button();
clearBtn.appendTo('#clearSorting');

document.getElementById('clearSorting').addEventListener('click', function () {
	ganttChart.clearSorting();
});