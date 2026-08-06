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
    editSettings: {
        allowTaskbarEditing: true
    },
    taskbarEditing: function (args) {
        if (args.data.TaskID == 4) {
            args.cancel = true; // We can't edit Task Id 4.
        }
    },
    queryTaskbarInfo: function (args) {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit'; // Taskbar editing indicators are disabled.
        }
    }
});

ganttChart.appendTo('#Gantt');