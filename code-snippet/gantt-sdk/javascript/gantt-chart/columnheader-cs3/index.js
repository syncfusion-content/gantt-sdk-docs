var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');

var alignmentData = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' }
];

var dropDownList = new ej.dropdowns.DropDownList({
    dataSource: alignmentData,
    index: 0,
    width: '100px',
    change: function (args) {
        ganttChart.treeGrid.grid.columns.forEach(function (col) {
            col.headerTextAlign = args.value;
        });
        ganttChart.treeGrid.grid.refreshHeader();
    }
});

dropDownList.appendTo('#alignment');