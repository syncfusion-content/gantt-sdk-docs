ej.gantt.Gantt.Inject(ej.gantt.Sort);

var currentSortOrder = 'Ascending';

function customSortComparer(reference, comparer) {
    var sortAsc = currentSortOrder === 'Ascending';

    if (reference === null && comparer === null) return 0;
    if (reference === null) return 1;
    if (comparer === null) return -1;

    if (reference < comparer) return sortAsc ? -1 : 1;
    if (reference > comparer) return sortAsc ? 1 : -1;

    return 0;
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250, sortComparer: customSortComparer },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    actionBegin: function (args) {
        if (args.requestType === 'sorting') {
            currentSortOrder = args.direction;
        }
    }
});

ganttChart.appendTo('#Gantt');