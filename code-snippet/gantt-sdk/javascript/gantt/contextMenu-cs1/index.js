var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    enableContextMenu: true,
    allowSorting: true,
    allowResizing: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    }
});

ganttChart.appendTo('#Gantt');