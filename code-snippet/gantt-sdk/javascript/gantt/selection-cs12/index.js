var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
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
        mode: 'Cell',
        type: 'Multiple',
        cellSelectionMode: 'Flow'
    }
});

ganttChart.appendTo('#Gantt');

var modeDropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'Cell', value: 'Cell' },
        { text: 'Row', value: 'Row' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: function (args) {
        ganttChart.treeGrid.grid.selectionSettings.mode = args.value;
        ganttChart.treeGrid.grid.refresh();
    }
});
modeDropDown.appendTo('#selectionMode');

var cellModeDropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'Flow', value: 'Flow' },
        { text: 'Box', value: 'Box' },
        { text: 'BoxWithBorder', value: 'BoxWithBorder' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: function (args) {
        ganttChart.treeGrid.grid.selectionSettings.cellSelectionMode = args.value;
    }
});
cellModeDropDown.appendTo('#cellSelectionMode');