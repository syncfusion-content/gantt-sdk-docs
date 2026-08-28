var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    splitterSettings: {columnIndex:4},
    daysPerWeek: 5,
    daysPerMonth: 20,
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