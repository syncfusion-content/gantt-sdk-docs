var firstGantt = new ej.gantt.Gantt({
    dataSource: FirstGanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
    },
    treeColumnIndex: 1,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height: 280,
});
firstGantt.appendTo('#GanttExport1');

var secondGantt = new ej.gantt.Gantt({
    dataSource: SecondGanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
    },
    treeColumnIndex: 1,
    allowPdfExport: true,
    height: 250,
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = function (args) {
    if (args.item.id === 'GanttExport1_pdfexport') {

        var firstGanttPdfExport = firstGantt.pdfExport({}, true);
        firstGanttPdfExport.then(function (pdfData) {
            secondGantt.pdfExport({}, false, pdfData);
        });
    }
}