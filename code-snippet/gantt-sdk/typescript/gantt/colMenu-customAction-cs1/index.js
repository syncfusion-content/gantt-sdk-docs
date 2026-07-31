var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    showColumnMenu: true,
    allowFiltering: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 5
    },
    columnMenuOpen: function (args) {
        for (var i = 0; i < args.items.length; i++) {
            if (args.items[i].text === 'Filter' && args.column.field === 'TaskName') {
                args.items[i].hide = true;
            } else {
                args.items[i].hide = false;
            }
        }
    },
});

ganttChart.appendTo('#Gantt');