ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '430px',
    toolbar: ['Add'],
    editSettings: {
        allowAdding: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    actionBegin: function (args) {
        if (args.requestType === 'beforeOpenAddDialog') {
            args.rowData.TaskName = 'Gantt';
            args.rowData.Progress = 70;

            if (args.rowData.ganttProperties) {
                args.rowData.ganttProperties.taskName = 'Gantt';
                args.rowData.ganttProperties.progress = 70;
            }
        }
    }
});

ganttChart.appendTo('#Gantt');