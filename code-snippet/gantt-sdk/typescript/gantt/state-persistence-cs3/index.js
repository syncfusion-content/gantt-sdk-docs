
ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Sort, ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    allowFiltering: true,
    enablePersistence: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    splitterSettings: { columnIndex: 2 },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 290 },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' }
    ]
});

ganttChart.appendTo('#Gantt');

var saveBtn = new ej.buttons.Button();
saveBtn.appendTo('#saveBtn');

var restoreBtn = new ej.buttons.Button();
restoreBtn.appendTo('#restoreBtn');

document.getElementById('saveBtn').addEventListener('click', function () {
    var persistData = ganttChart.getPersistData();
    if (persistData) {
        localStorage.setItem('ganttTaskDetails', persistData);
    }
});

document.getElementById('restoreBtn').addEventListener('click', function () {
    var value = localStorage.getItem('ganttTaskDetails');
    if (value) {
        var state = JSON.parse(value);
        ganttChart.treeGrid.setProperties(state);
    }
});