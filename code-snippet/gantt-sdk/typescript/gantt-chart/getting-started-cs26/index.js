ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection, ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: editingResources,
    height: '450px',
    allowSelection: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'Resources'
    },
    resourceFields: {
        id: 'ResourceId',
        name: 'ResourceName'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
    actionBegin: function (args) {
        if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
            args.Dependency.columns[3].validationRules = { required: true };
            args.Resources.columns[2].allowEditing = true;
            args.Resources.columns[2].validationRules = { required: true };
        }
    },
    columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', validationRules: { required: true } },
        {
            field: 'StartDate',
            editType: 'datetimepickeredit',
            edit: { params: { format: 'M/d/y hh:mm a' } },
            format: 'M/d/y hh:mm a',
            validationRules: { required: true, date: true }
        },
        { field: 'Duration', validationRules: { required: true } },
        { field: 'Progress', validationRules: { required: true } }
    ]
});

ganttChart.appendTo('#Gantt');