var gantt = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        {
            headerText: 'Task Information',
            textAlign: 'Center',
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: 200 },
                { field: 'Progress', headerText: 'Progress', width: 120 }
            ]
        },
        {
            headerText: 'Schedule',
            textAlign: 'Center',
            columns: [
                { field: 'StartDate', headerText: 'Start Date', width: 130 },
                { field: 'Duration', headerText: 'Duration', width: 110 }
            ]
        }
    ]
});

gantt.appendTo('#Gantt');
