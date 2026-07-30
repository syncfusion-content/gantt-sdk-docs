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
        mode: 'Row'
    }
});
ganttChart.appendTo('#Gantt');

var dropDownList = new ej.dropdowns.DropDownList({
    width: '200px',
    dataSource: [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: function (args) {
        ganttChart.selectionSettings.mode = args.value;
    }
});
dropDownList.appendTo('#selectionMode');