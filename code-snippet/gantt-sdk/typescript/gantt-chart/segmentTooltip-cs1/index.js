var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('04/10/2019'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        segments: 'Segments'
    },
    tooltipSettings: {
        showTooltip: true,
        showSegmentTooltip: true
    }
});

ganttChart.appendTo('#Gantt');
