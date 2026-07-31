import { Gantt, Edit, Selection, Toolbar, EditSettingsModel } from '@syncfusion/ej2-gantt';
import { GanttData, editingResources } from './datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let gantt: Gantt = new Gantt({
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
    editSettings: <EditSettingsModel>{
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
    actionBegin: (args: any) => {
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

gantt.appendTo('#Gantt');