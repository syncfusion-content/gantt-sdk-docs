var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: {
        columnIndex: 6
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', minWidth: 200, width: 250, maxWidth: 300 },
        { field: 'StartDate' },
        { field: 'Duration', minWidth: 100, maxWidth: 200 },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');