var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        indicators: 'Indicators'
    },
});
ganttChart.appendTo('#Gantt');