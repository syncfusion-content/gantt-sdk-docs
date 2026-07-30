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
		allowFiltering: true
    });
ganttChart.appendTo('#Gantt');

var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Parent', mode: 'Parent' },
            { id: 'Child', mode: 'Child' },
            { id: 'Both', mode: 'Both' },
            { id: 'None', mode: 'None' },
        ],
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        change: function (e) {
            var mode = e.value;
            ganttChart.filterSettings.hierarchyMode = mode;
            ganttChart.clearFiltering();
        }
});

dropDownMode.appendTo('#mode');