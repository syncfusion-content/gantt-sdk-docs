var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    taskbarHeight: 50,
    rowHeight: 60,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
});

ganttChart.appendTo('#Gantt');