ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    taskMode:"Manual",
    treeColumnIndex: 1,
    validateManualTasksOnLinking: true,
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel', 'CollapseAll', 'ExpandAll', 'Search'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    }
});
ganttChart.appendTo('#Gantt');