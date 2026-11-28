ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.ProgressLine);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    },
    progressLine: {
        statusDate: new Date('04/07/2026'),
        lineColor: '#e3165b',
        lineWidth: 2
    },
    projectStartDate: new Date('04/05/2026'),
    projectEndDate: new Date('04/30/2026')
});

ganttChart.appendTo('#Gantt');