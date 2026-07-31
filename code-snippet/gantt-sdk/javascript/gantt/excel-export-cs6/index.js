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
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 100, textAlign: 'Right' }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'ganttDefault_excelexport') {
            var excelExportProperties = {
                theme: {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
            };
            ganttChart.excelExport(excelExportProperties);
        }
    }
});

ganttChart.appendTo('#ganttDefault');