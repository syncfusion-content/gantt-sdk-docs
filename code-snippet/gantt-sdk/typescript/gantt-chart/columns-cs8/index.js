var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: '75%'
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '200', hideAtMedia: '(min-width: 700px)' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100', hideAtMedia: '(max-width: 500px)' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]

});
ganttChart.appendTo('#Gantt');