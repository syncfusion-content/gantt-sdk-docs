var taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

var splitterSettings = {
    position: '75%'
};

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    treeColumnIndex: 1,
    taskFields: taskSettings,
    splitterSettings: splitterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: function (args) {
        var rowData = args.data;
        var columnIndex = args.column.index;
        var treeColumnIndex = gantt.treeColumnIndex;
        if (!rowData.hasChildRecords && columnIndex === treeColumnIndex) {
            args.cell.classList.add('indents');
        }
    }
});

gantt.appendTo('#Gantt');