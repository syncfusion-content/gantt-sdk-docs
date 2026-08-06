var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSelection: true,
    editSettings: {
        allowEditing: true
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
        { field: 'TaskID' },
        { field: 'TaskName', allowEditing: false },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');