var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    enableHover: false,
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
        type: 'Single'
    },
    cellSelecting: function (args) {
        updateMessage('Trigger cellSelecting');
        if (args.data.TaskName === 'Perform Soil test') {
            args.cancel = true;
            updateMessage('Trigger cellSelecting - Selection canceled for "Perform Soil test"');
        }
    },
    cellSelected: function (args) {
        updateMessage('Trigger cellSelected');
        args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
    },
    cellDeselecting: function (args) {
        updateMessage('Trigger cellDeselecting');
        if (args.cells && args.cells.length > 0) {
            args.cells[0].style.color = 'rgb(253, 253, 253)';
        }
    },
    cellDeselected: function (args) {
        updateMessage('Trigger cellDeselected');
        if (args.cells && args.cells.length > 0) {
            args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';
        }
    }
});

ganttChart.appendTo('#Gantt');

function updateMessage(text) {
    var msgEl = document.getElementById('message');
    if (msgEl) {
        msgEl.innerText = text;
        msgEl.style.display = 'block';
    }
}