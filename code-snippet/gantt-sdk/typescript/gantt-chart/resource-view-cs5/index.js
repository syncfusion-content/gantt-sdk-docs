ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    resources: resources,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        work: 'work',
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add'],
    labelSettings: {
        leftLabel: 'TaskName'
    },
    actionBegin: function (args) {
        if (args.requestType === 'beforeOpenAddDialog' ||
            args.requestType === 'beforeOpenEditDialog') {
            args.Resources.columns[1].visible = false;
        }
    }
});

ganttChart.appendTo('#Gantt');