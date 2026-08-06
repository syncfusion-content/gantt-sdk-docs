ej.gantt.Gantt.Inject(ej.gantt.Sort);

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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    sortSettings: {
        allowUnsort: false
    }
});

ganttChart.appendTo('#Gantt');