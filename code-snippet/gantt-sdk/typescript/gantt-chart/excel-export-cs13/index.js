ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.ExcelExport, ej.gantt.Selection);

function exportBlob(blob) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport', 'CsvExport'],
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            ganttChart.excelExport(undefined, undefined, undefined, true);
        }
        if (args.item && args.item.id === 'GanttDefault_csvexport') {
            ganttChart.csvExport(undefined, undefined, undefined, true);
        }
    },
    excelExportComplete: function (args) {
        if (args && args.promise) {
            args.promise.then(function (e) {
                exportBlob(e.blobData);
            });
        }
    }
});

ganttChart.appendTo('#GanttDefault');