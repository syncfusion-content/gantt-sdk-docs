ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    allowSelection: true,
    editSettings: {
        allowEditing: true,
        mode: 'Auto'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

ganttChart.appendTo('#Gantt');