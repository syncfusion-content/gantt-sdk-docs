var message = document.getElementById('message');

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
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
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    expanding: function (args) {
        var data = args.data;
        if (data) {
            message.innerHTML = 'Expanding Task: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
            message.style.color = 'blue';
            if (data.TaskID === 1) {
                args.cancel = true;
                message.innerHTML = 'Expanding cancelled for Task: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
                message.style.color = 'red';
            }
        }
    },
    collapsing: function (args) {
        var data = args.data;
        if (data) {
            message.innerHTML = 'Collapsing Task: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
            message.style.color = 'orange';
            if (data.TaskID === 5) {
                args.cancel = true;
                message.innerHTML = 'Collapsing cancelled for Task: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
                message.style.color = 'red';
            }
        }
    },
    expanded: function (args) {
        var data = args.data;
        if (data && args.row) {
            message.innerHTML = 'Task Expanded: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
            message.style.color = 'green';
            args.row.style.background = '';
            if ((data.Progress || 0) > 50) {
                args.row.style.background = '#c0f6c7ff';
            }
        }
    },
    collapsed: function (args) {
        var data = args.data;
        if (data && args.row) {
            message.innerHTML = 'Task Collapsed: ' + data.TaskName + ' (ID: ' + data.TaskID + ')';
            message.style.color = 'purple';
            args.row.style.background = '';
            if ((data.Progress || 0) < 50) {
                args.row.style.background = '#fb9c9cff';
            }
        }
    }
});

ganttChart.appendTo('#Gantt');