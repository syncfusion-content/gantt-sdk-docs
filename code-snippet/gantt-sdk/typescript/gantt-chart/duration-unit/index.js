var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    splitterSettings: {columnIndex:4},
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit:'DurationUnit',
        parentID: 'ParentID',
    },
});
ganttChart.appendTo('#Gantt');