var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    splitterSettings: { position: '75%' },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', format: 'yMd', width: 150 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});
gantt.appendTo('#Gantt');

var alignmentDropdown = new ej.dropdowns.DropDownList({
    width: '120px',
    dataSource: [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Right',
    change: function (args) {
        gantt.treeGrid.grid.columns.forEach(function (col) {
            col.textAlign = args.value;
        });
        gantt.treeGrid.grid.refreshColumns();
    }
});
alignmentDropdown.appendTo('#alignment');