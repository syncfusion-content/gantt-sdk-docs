var ganttChart;

ej.gantt.Gantt.Inject(ej.gantt.Filter);

ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');

var singleBtn = new ej.buttons.Button();
singleBtn.appendTo('#singleFilter');

var multiBtn = new ej.buttons.Button();
multiBtn.appendTo('#multipleFilter');

document.getElementById('singleFilter').addEventListener('click', function () {
    ganttChart.clearFiltering();
    ganttChart.filterByColumn('TaskName', 'startswith', 'Iden', 'and');
});

document.getElementById('multipleFilter').addEventListener('click', function () {
    ganttChart.clearFiltering();
    ganttChart.filterSettings = {
        columns: [
            { field: 'TaskID', operator: 'equal', value: 2, predicate: 'or' },
            { field: 'TaskID', operator: 'equal', value: 3, predicate: 'or' },
            { field: 'TaskID', operator: 'equal', value: 4, predicate: 'or' }
        ]
    };
});