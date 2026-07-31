var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        {
            field: 'TaskName',
            headerText: 'Task Name',
            headerTemplate: '#headerTemplate'
        },
        {
            field: 'StartDate',
            headerText: 'Start Date'
        },
        {
            field: 'Duration',
            headerText: 'Duration',
            headerTemplate: '#headerTemplate'
        },
        {
            field: 'Progress',
            headerText: 'Progress'
        }
    ]
});

ganttChart.appendTo('#Gantt');