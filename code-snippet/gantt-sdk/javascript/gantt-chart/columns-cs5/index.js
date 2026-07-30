ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        verified: 'Verified'
    },
    columns: [
        { type: 'checkbox', width: 90 },
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: 'yMd', type: 'date' },
        { field: 'EndDate', headerText: 'End Date', textAlign: 'Right', width: 150, format: 'dd/MM/yyyy hh:mm', type: 'dateTime' },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'Verified', headerText: 'Verified', width: 100, type: 'boolean', displayAsCheckBox: true }
    ]
});

ganttChart.appendTo('#Gantt');