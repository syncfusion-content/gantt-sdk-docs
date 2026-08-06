var message = '';

function updateMessage() {
    var el = document.getElementById('message');
    if (el) {
        el.innerHTML = message;
    }
}

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
        mode: 'Row',
        type: 'Multiple'
    },
    rowSelecting: function (args) {
        var task = args.data;
        if (task.TaskID === 2) {
            args.cancel = true;
            message = 'Selection cancelled for TaskID 2';
            updateMessage();
        }
    },
    rowSelected: function (args) {
        var task = args.data;
        if (task.Progress && task.Progress > 40) {
            args.row.style.backgroundColor = 'rgba(203, 246, 205, 1)';
        }
    },
    rowDeselected: function (args) {
        if (args.data && !Array.isArray(args.data)) {
            var task = args.data;
            if (task.Progress && task.Progress <= 40) {
                args.row.style.backgroundColor = '#e1838eff';
            }
        }
    },
    rowDeselecting: function (args) {
        if (args.data && !Array.isArray(args.data)) {
            var task = args.data;
            if (task.Progress && task.Progress > 80) {
                args.row.style.backgroundColor = '#f5f54bff';
            }
        }
    }
});

ganttChart.appendTo('#Gantt');