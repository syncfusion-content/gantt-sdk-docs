var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport', 'CsvExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'StartDate', width: 150, visible: false },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttDefault_excelexport') {
            var excelExportProperties = { enableFilter: true };
            ganttChart.excelExport(excelExportProperties);
        }
    }
});

ganttChart.appendTo('#GanttDefault');