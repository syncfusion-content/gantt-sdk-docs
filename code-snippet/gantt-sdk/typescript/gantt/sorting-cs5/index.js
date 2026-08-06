ej.gantt.Gantt.Inject(ej.gantt.Sort);

function customSortComparer(reference, comparer) {
    if (reference < comparer) return -1;
    if (reference > comparer) return 1;
    return 0;
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
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
    sortSettings: {
        columns: [
            { field: 'TaskID', direction: 'Descending' },
            { field: 'StartDate', direction: 'Ascending' }
        ]
    }
});

ganttChart.appendTo('#Gantt');