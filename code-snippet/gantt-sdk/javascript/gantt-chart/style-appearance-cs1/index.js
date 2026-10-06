var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate'
    },
    labelSettings: {
        rightLabel: 'TaskName'
    },
    eventMarkers: [
        { day: new Date('01/16/2026'), label: 'Project approval and kick-off' }
    ],
    renderBaseline: true
});
ganttChart.appendTo('#Gantt');