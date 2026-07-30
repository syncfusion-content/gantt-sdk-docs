var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            textAlign: 'Right',
            clipMode: 'EllipsisWithTooltip',
            width: 90
        },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 60 },
        {
            field: 'Duration',
            headerText: 'Duration',
            textAlign: 'Right',
            clipMode: 'Ellipsis',
            width: 60
        },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 190 }
    ]
});

ganttChart.appendTo('#Gantt');