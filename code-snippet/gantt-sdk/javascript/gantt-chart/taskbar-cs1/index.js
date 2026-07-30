var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        notes: 'Info'
    },
    queryTaskbarInfo: function (args) {
        var task = args.data;
        if (task.TaskID >= 7 && task.TaskID <= 10) {
            args.taskbarElement.style.visibility = 'hidden';
        }
    },
    queryCellInfo: function (args) {
        var task = args.data;
        if (args.column.field === 'Info' && (!task.Info || task.Info.trim() === '')) {
            var notesIcon = args.cell.querySelector('.e-notes-info');
            if (notesIcon) {
                notesIcon.style.visibility = 'hidden';
            }
        }
    },
    // columns: [
    //     { field: 'TaskID', width: 80 },
    //     { field: 'TaskName', headerText: 'Task Name' },
    //     { field: 'StartDate' },
    //     { field: 'Duration' },
    //     { field: 'Progress' },
    //     { field: 'Info', headerText: 'Notes' }
    // ]
});

ganttChart.appendTo('#Gantt');