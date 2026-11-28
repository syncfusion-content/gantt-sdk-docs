var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/05/2026'),
    projectEndDate: new Date('04/10/2026'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    },
    tooltipSettings: {
        showTooltip: true,
        showSegmentTooltip: true
    }
});

ganttChart.appendTo('#Gantt');
