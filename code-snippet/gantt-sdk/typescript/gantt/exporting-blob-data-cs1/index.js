var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
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
    toolbar: ['PdfExport', 'ExcelExport'],
    allowPdfExport: true,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport(null, null, null, true);
        }
        if (args.item.id === 'GanttExport_excelexport') {
            ganttChart.excelExport(null, null, null, true);
        }
    },
    excelExportComplete: function (args) {
        args.promise.then(function (e) {
            exportBlob(e.blobData);
        });
    },
    pdfExportComplete: function (args) {
        args.promise.then(function (e) {
            exportBlob(e.blobData);
        });
    }
});

ganttChart.appendTo('#GanttExport');

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