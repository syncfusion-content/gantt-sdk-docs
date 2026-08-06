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
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttExport_excelexport') {
            ganttChart.excelExport();
        } else if (args.item && args.item.id === 'GanttExport_csvexport') {
            ganttChart.csvExport();
        }
    },
    queryCellInfo: function (args) {
        var d = args.data;
        if (d.TaskID === 4 && args.column && args.column.field === 'TaskName') {
            args.rowSpan = 2;
        }
        if (d.TaskID === 6 && args.column && args.column.field === 'TaskName') {
            args.colSpan = 2;
        }
    },
    excelQueryCellInfo: function (args) {
        var d = args.data;
        if (d.TaskID === 4 && args.column && args.column.field === 'TaskName') {
            args.rowSpan = 2;
        }
        if (d.TaskID === 6 && args.column && args.column.field === 'TaskName') {
            args.colSpan = 2;
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 120 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

ganttChart.appendTo('#GanttExport');