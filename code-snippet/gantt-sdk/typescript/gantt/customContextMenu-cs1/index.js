var ganttChart = new ej.gantt.Gantt({
    height: '430px',
    dataSource: data,
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
    contextMenuItems: [
        'AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
    ],
    allowSorting: true,
    allowResizing: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    contextMenuClick: function (args) {
        var record = args.rowData;

        if (args.item.id === 'collapserow') {
            ganttChart.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            ganttChart.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            ganttChart.hideColumn(args.column.headerText);
        }
    },
    contextMenuOpen: function (args) {
        var record = args.rowData;

        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            } else {
                if (record.expanded) {
                    args.hideItems.push('Expand the Row');
                } else {
                    args.hideItems.push('Collapse the Row');
                }
            }
        }
    }
});

ej.gantt.Gantt.Inject(
    ej.gantt.Selection,
    ej.gantt.ContextMenu,
    ej.gantt.Edit,
    ej.gantt.Sort,
    ej.gantt.Resize
);

ganttChart.appendTo('#Gantt');