var ganttChart = new ej.gantt.Gantt({
    dataSource: virtualData,
    height: '450px',
    treeColumnIndex: 1,
    allowSelection: true,
    highlightWeekends: true,
    enableVirtualization: true,
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        leftLabel: 'TaskName',
        taskLabel: 'Progress'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');