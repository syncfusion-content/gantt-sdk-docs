ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Resize);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
        showColumnMenu: true,
        allowFiltering: true,
        allowResizing: true,
        allowSorting: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
        splitterSettings: {
            position: '100%'
        },
     columnMenuOpen: function() {
            alert('columnMenuOpen event is Triggered');
        },
    columnMenuClick: function() {
            alert('columnMenuClick event is Triggered');
        },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' }
    ],
});
ganttChart.appendTo('#Gantt');

