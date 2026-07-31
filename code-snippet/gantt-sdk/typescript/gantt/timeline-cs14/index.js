var taskFields = {
	id: 'TaskID',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	progress: 'Progress',
	parentID: 'ParentID'
};

var timelineSettings = {
	timelineViewMode: 'Week'
};

var timelineOptions = [
	{ Id: 'Week', Value: 'Week' },
	{ Id: 'Day', Value: 'Day' },
	{ Id: 'Month', Value: 'Month' }
];

var gantt = new ej.gantt.Gantt({
	height: '430px',
	dataSource: GanttData,
	taskFields: taskFields,
	timelineSettings: timelineSettings
});
gantt.appendTo('#Gantt');

var comboBox = new ej.dropdowns.ComboBox({
	dataSource: timelineOptions,
	width: '200px',
	fields: { text: 'Value', value: 'Id' },
	index: 0,
	change: function (args) {
		if (gantt) {
			gantt.timelineSettings.timelineViewMode = args.value;
			gantt.refresh();
		}
	}
});
comboBox.appendTo('#timeline');