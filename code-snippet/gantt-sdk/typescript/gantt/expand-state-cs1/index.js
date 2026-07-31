var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        expandState: 'IsExpanded'
    },
    expandStateMapping: 'IsExpanded'
});

ganttChart.appendTo('#Gantt');