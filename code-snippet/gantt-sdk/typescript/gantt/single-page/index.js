var clickHandler = function (args) {
    if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            fitToWidthSettings: {
                isFitToWidth: true,
            }
        };
        ganttChart.pdfExport(exportProperties);
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    dateFormat: 'MMM dd, y',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
    },
    columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', width: 250 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' }
    ],
    splitterSettings: {
        columnIndex: 2
    },
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    allowSelection: true,
    gridLines: 'Both',
    height: '450px',
    treeColumnIndex: 1,
    highlightWeekends: true,
    timelineSettings: {
        topTier: {
            unit: 'Week',
            format: 'MMM dd, y',
        },
        bottomTier: {
            unit: 'Day',
        },
    },
    labelSettings: {
        leftLabel: 'TaskName',
    },
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('07/28/2019')
});
ganttChart.appendTo('#GanttExport');