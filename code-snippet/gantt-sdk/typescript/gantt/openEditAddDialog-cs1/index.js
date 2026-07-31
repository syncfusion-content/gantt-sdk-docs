var gantt = new ej.gantt.Gantt({
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

var editBtn = new ej.buttons.Button();
editBtn.appendTo('#editDialog');

document.getElementById('editDialog').addEventListener('click', function () {
    gantt.editModule.dialogModule.openEditDialog(gantt.selectedRowIndex + 1);
});

var addBtn = new ej.buttons.Button();
addBtn.appendTo('#addDialog');

document.getElementById('addDialog').addEventListener('click', function () {
    gantt.editModule.dialogModule.openAddDialog();
});