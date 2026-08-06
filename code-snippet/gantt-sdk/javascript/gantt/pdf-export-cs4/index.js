var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            exportType: 'CurrentViewData'
        };
        ganttChart.pdfExport(exportProperties);
   }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');