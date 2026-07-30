import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { editingData, editingResources } from './datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: editingData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        notes: 'info',
        resourceInfo: 'resources'
    },
    editDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    resourceNameMapping: 'resourceName',
    resourceIDMapping: 'resourceId',
    resources: editingResources,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    }
});

gantt.appendTo('#Gantt');

let editBtn: Button = new Button();
editBtn.appendTo('#editDialog');

document.getElementById('editDialog')!.addEventListener('click', () => {
    gantt.editModule.dialogModule.openEditDialog(gantt.selectedRowIndex + 1);
});

let addBtn: Button = new Button();
addBtn.appendTo('#addDialog');

document.getElementById('addDialog')!.addEventListener('click', () => {
    gantt.editModule.dialogModule.openAddDialog();
});