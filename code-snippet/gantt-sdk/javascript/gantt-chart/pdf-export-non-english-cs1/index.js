var clickHandler = function (args) {
    if (args.item.id === 'GanttExport_pdfexport') {
        console.log(adventProFont);
        // Create PdfExportProperties with custom font for non-English characters (Arabic)
        var exportProperties = {
            fileName: "project-arabic.pdf",
            ganttStyle: {
                font: new ej.pdfexport.PdfTrueTypeFont(adventProFont, 12)
            }
        };
        ganttChart.pdfExport(exportProperties);
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'معرف', width: 80 },
        { field: 'TaskName', headerText: 'اسم المهمة', width: 250 },
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');
