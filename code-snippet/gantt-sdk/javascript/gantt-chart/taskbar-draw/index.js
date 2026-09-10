var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('03/28/2026'),
    projectEndDate: new Date('05/18/2026'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    allowUnscheduledTasks: true,
    editSettings: {
        allowTaskbarEditing: true,
        allowTaskbarDraw: true
    }
});

ganttChart.appendTo('#Gantt');