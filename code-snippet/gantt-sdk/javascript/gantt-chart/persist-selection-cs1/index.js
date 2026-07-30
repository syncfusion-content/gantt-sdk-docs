var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple',
        persistSelection: true
    }
});

gantt.appendTo('#Gantt');

var switchObj = new ej.buttons.Switch({
    checked: true,
    change: function (args) {
        gantt.selectionSettings.persistSelection = args.checked;
    }
});

switchObj.appendTo('#switch');