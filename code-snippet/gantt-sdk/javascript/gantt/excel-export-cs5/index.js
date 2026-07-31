var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        taskLabel: '${Progress}%'
    },
    splitterSettings: {
        columnIndex: 3
    },
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100, visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            ganttChart.excelExport();
        }
    },
    excelQueryCellInfo: function (args) {
        if (args.column && args.column.field === 'Progress') {
            var progressValue = args.value;
            if (progressValue > 80) {
                args.style = { backColor: '#A569BD' };
            } else if (progressValue < 20) {
                args.style = { backColor: '#F08080' };
            }
        }
    },
    queryTaskbarInfo: function (args) {
        var progress = args.data && args.data.Progress;
        if (progress > 80) {
            args.progressBarBgColor = '#6C3483';
            args.taskbarBgColor = '#A569BD';
            args.taskbarBorderColor = '#A569BD';
        } else if (progress < 20) {
            args.progressBarBgColor = '#CD5C5C';
            args.taskbarBgColor = '#F08080';
            args.taskbarBorderColor = '#F08080';
        }
    },
    queryCellInfo: function (args) {
        if (args.column && args.column.field === 'Progress') {
            var progress = args.data && args.data.Progress;
            if (progress > 80) {
                args.cell.style.backgroundColor = '#A569BD';
            } else if (progress < 20) {
                args.cell.style.backgroundColor = '#F08080';
            }
        }
    }
});

ganttChart.appendTo('#GanttDefault');