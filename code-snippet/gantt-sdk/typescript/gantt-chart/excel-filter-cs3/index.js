ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '370px',
    allowFiltering: true,
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
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    filterSettings: {
        type: 'Excel'
    }
});

ganttChart.appendTo('#Gantt');