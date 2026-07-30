var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});
ganttChart.appendTo('#Gantt');

var resizeModeData = [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' }
];

var dropDownList = new ej.dropdowns.DropDownList({
    dataSource: resizeModeData,
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '100',
    change: function (args) {
        ganttChart.treeGrid.grid.resizeSettings.mode = args.value;
    }
});
dropDownList.appendTo('#resizeMode');