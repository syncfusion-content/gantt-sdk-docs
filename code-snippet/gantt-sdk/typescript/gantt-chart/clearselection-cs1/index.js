var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
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
        mode: 'Both',
        type: 'Multiple'
    }
});

gantt.appendTo('#Gantt');

var dropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Row',
    width: 150,
    change: function (args) {
        gantt.selectionSettings.mode = args.value;
    }
});

dropDown.appendTo('#selectionMode');

var clearBtn = new ej.buttons.Button();
clearBtn.appendTo('#clearSelection');

document.getElementById('clearSelection').addEventListener('click', function () {
    gantt.clearSelection();
});