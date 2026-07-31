var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    height: '430px',
    dataSource: GanttData,
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
    pdfQueryTimelineCellInfo: function (args) {
        args.timelineCell.backgroundColor = new ej.pdfexport.PdfColor(240, 248, 255);
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