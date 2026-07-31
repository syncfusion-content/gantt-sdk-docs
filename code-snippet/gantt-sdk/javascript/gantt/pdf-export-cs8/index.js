var clickHandler = function (args) {
    if (args.item.id === 'GanttExport_pdfexport') {
        ganttChart.pdfExport();
    }
};

var beforePdfExport = function (args) {
    ganttChart.treeGrid.columns[2].visible = false;
    ganttChart.treeGrid.columns[3].visible = true;
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration', visible: false },
        { field: 'Progress' }
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    beforePdfExport: beforePdfExport
});
ganttChart.appendTo('#GanttExport');