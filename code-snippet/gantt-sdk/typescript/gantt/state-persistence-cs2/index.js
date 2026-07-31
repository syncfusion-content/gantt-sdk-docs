var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowFiltering: true,
    enablePersistence: true,
    splitterSettings: { columnIndex: 2 },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
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
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

ganttChart.appendTo('#Gantt');

document.getElementById('restore').addEventListener('click', function () {
    ganttChart.enablePersistence = false;
    window.localStorage.setItem('ganttGantt', '');
    ganttChart.destroy();
    location.reload();
});