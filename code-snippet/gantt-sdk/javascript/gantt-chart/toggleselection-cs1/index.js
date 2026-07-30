var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '380px',
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
        enableToggle: true
    }
});
ganttChart.appendTo('#Gantt');

var selectionMode = new ej.dropdowns.DropDownList({
    dataSource: ['Row', 'Cell', 'Both'],
    index: 0,
    width: '150px',
    change: function (args) {
        ganttChart.selectionSettings.mode = args.value;
    }
});
selectionMode.appendTo('#selectionMode');

var toggleSwitch = new ej.buttons.Switch({
    checked: true,
    change: function (args) {
        ganttChart.selectionSettings.enableToggle = args.checked;
    }
});
toggleSwitch.appendTo('#toggleSelection');