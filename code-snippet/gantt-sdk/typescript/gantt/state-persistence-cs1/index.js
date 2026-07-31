var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    enablePersistence: true,
    allowSorting: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 2
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 290 },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Sort, ej.gantt.Filter);

ganttChart.appendTo('#TaskDetails');

var restoreBtn = new ej.buttons.Button();
restoreBtn.appendTo('#restore');

document.getElementById('restore').addEventListener('click', function () {
    var id = 'TaskDetails' + Math.floor(Math.random() * 10);
    ganttChart.element.id = id;
    location.reload();
});