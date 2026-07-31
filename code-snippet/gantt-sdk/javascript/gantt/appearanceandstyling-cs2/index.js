var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    queryTaskbarInfo: function (args) {
        var record = args.data;

        if (record.Progress === 50) {
            args.progressBarBgColor = 'red';
        } else if (record.Progress === 70) {
            args.progressBarBgColor = 'yellow';
        } else if (record.Progress === 80) {
            args.progressBarBgColor = 'lightgreen';
        }
    }
});

ganttChart.appendTo('#Gantt');