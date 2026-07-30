var taskFields = {
	id: 'TaskID',
	name: 'TaskName',
	startDate: 'StartDate',
	endDate: 'EndDate',
	duration: 'Duration',
	progress: 'Progress',
	parentID: 'ParentID'
};

var columns = [
	{ field: 'TaskID', headerText: 'Task ID', width: '100' },
	{ field: 'TaskName', headerText: 'Task Name', width: '150' },
	{ field: 'StartDate', headerText: 'Start Date', width: '150' },
	{ field: 'Duration', headerText: 'Duration', width: '150' },
	{ field: 'Progress', headerText: 'Progress', width: '150' }
];

var gantt = new ej.gantt.Gantt({
	height: '430px',
	dataSource: GanttData,
	taskFields: taskFields,
	timelineSettings: { timelineViewMode: 'Week' },
	columns: columns
});
gantt.appendTo('#Gantt');

var prevBtn = new ej.buttons.Button({ content: 'Previous Week' });
prevBtn.appendTo('#previousWeek');

var nextBtn = new ej.buttons.Button({ content: 'Next Week' });
nextBtn.appendTo('#nextWeek');

document.getElementById('previousWeek').addEventListener('click', function () {
	gantt.previousTimeSpan();
});

document.getElementById('nextWeek').addEventListener('click', function () {
	gantt.nextTimeSpan();
});