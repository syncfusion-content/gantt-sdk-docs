ej.gantt.Gantt.Inject(ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 2
    },
    filterSettings: {
        type: 'Menu'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');

var filterBtn = new ej.buttons.Button();
filterBtn.appendTo('#performFilter');

var clearBtn = new ej.buttons.Button();
clearBtn.appendTo('#clearFilter');

document.getElementById('performFilter').addEventListener('click', function () {
    ganttChart.filterByColumn('TaskName', 'startswith', 'Project');
});

document.getElementById('clearFilter').addEventListener('click', function () {
    ganttChart.clearFiltering();
});