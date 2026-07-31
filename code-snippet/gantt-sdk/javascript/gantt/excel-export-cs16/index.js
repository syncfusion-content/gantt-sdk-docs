var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    toolbar: ['ExcelExport', 'CsvExport'],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            var exportColumns = [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Project Name', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' }
            ];
            var excelExportProperties = {
                columns: exportColumns
            };
            ganttChart.excelExport(excelExportProperties);
        }
    }
});

ganttChart.appendTo('#GanttDefault');