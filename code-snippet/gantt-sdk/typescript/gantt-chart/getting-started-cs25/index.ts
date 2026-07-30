import { Gantt, Edit, Selection, Toolbar, EditSettingsModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let customFn: Function = (args: any) => {
    return args.value && args.value.length >= 8;
};

let gantt: Gantt = new Gantt({
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
    editSettings: <EditSettingsModel>{
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

gantt.appendTo('#Gantt');