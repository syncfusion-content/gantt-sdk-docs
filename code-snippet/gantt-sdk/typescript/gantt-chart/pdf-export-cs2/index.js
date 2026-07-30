var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    id: 'ganttDefault',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'ID', width: 100, textAlign: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport({
                pageOrientation: 'Portrait'
            });
        }
    }
});

gantt.appendTo('#GanttExport');