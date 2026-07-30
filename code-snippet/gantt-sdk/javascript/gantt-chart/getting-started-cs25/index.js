ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection, ej.gantt.Toolbar);

var customFn = function (args) {
    return args.value && args.value.length >= 8;
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSelection: true,
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
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
    columns: [
        { field: 'TaskID', width: 80 },
        {
            field: 'TaskName',
            validationRules: {
                minLength: [customFn, 'Value should be greater than 8 letters'],
                required: true
            }
        },
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