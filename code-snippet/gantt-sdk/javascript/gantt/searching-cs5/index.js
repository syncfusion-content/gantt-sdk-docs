var key = '';

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    },
    toolbar: ['Search'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 400 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    actionBegin: function (args) {
        if (args.requestType === 'searching') {
            key = args.searchString ? args.searchString.toLowerCase() : '';
        }
    },
    queryCellInfo: function (args) {
        if (key) {
            var field = args.column.field;
            var value = args.data[field];

            if (typeof value === 'string' || typeof value === 'number') {
                var str = value.toString();
                var regex = new RegExp(key, 'gi');
                var highlighted = str.replace(regex, function (m) {
                    return "<span class='customcss'>" + m + "</span>";
                });
                args.cell.innerHTML = highlighted;
            }
        }
    }
});

ganttChart.appendTo('#Gantt');