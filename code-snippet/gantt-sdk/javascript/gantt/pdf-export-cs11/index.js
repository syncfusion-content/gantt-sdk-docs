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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport();
        }
    },
    pdfQueryTaskbarInfo: function (args) {
        var d = args.data;
        if (d.Progress < 50 && !d.hasChildRecords) {
            var bar = args.taskbar;
            bar.progressColor = new ej.pdfexport.PdfColor(205, 92, 92);
            bar.taskColor = bar.taskBorderColor = new ej.pdfexport.PdfColor(240, 128, 128);
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, visible: false },
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#GanttExport');