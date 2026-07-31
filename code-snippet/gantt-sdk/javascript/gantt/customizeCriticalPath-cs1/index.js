ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.CriticalPath);

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
    enableCriticalPath: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['CriticalPath'],
    queryTaskbarInfo(args) {
        if (args.data.isCritical && !args.data.hasChildRecords) {
            args.taskbarBgColor = 'rgb(242, 210, 189)';
            args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
});
ganttChart.appendTo('#Gantt');