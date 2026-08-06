var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        predecessor: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    eventMarkers: [
        { day: '04/10/2019', cssClass: 'e-custom-event-marker', label: 'Project approval and kick-off' }
    ],
    holidays: [
        { from: '04/04/2019', to: '04/04/2019', label: ' Public holidays', cssClass: 'e-custom-holiday' },
        { from: '04/12/2019', to: '04/12/2019', label: ' Public holiday', cssClass: 'e-custom-holiday' }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {

            var stringFormat = new ej.pdfexport.PdfStringFormat();
            stringFormat.alignment = ej.pdfexport.PdfTextAlignment.Center;

            var vertical = new ej.pdfexport.PdfStringFormat();
            vertical.alignment = ej.pdfexport.PdfTextAlignment.Center;

            var pen = new ej.pdfexport.PdfPen(new ej.pdfexport.PdfColor(105, 105, 105), 1);
            pen.dashStyle = ej.pdfexport.PdfDashStyle.Dash;

            var borderPen = new ej.pdfexport.PdfPen(new ej.pdfexport.PdfColor(192, 192, 192), 1);
            var borders = new ej.pdfexport.PdfBorders();
            borders.all = borderPen;

            ganttChart.pdfExport({
                ganttStyle: {
                    connectorLineColor: new ej.pdfexport.PdfColor(128, 0, 0),
                    taskbar: {
                        taskColor: new ej.pdfexport.PdfColor(240, 128, 128),
                        taskBorderColor: new ej.pdfexport.PdfColor(255, 0, 0),
                        progressColor: new ej.pdfexport.PdfColor(205, 92, 92)
                    },
                    columnHeader: {
                        backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255)
                    },
                    timeline: {
                        backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255),
                        padding: new ej.pdfexport.PdfPaddings(5, 2, 0, 0)
                    },
                    footer: {
                        backgroundColor: new ej.pdfexport.PdfColor(205, 92, 92)
                    },
                    label: {
                        fontColor: new ej.pdfexport.PdfColor(128, 0, 0)
                    },
                    cell: {
                        backgroundColor: new ej.pdfexport.PdfColor(240, 248, 255),
                        fontColor: new ej.pdfexport.PdfColor(0, 0, 0),
                        borderColor: new ej.pdfexport.PdfColor(179, 219, 255)
                    },
                    fontFamily: 1,
                    eventMarker: {
                        label: {
                            backgroundColor: new ej.pdfexport.PdfColor(255, 239, 213),
                            fontFamily: ej.pdfexport.PdfFontFamily.TimesRoman,
                            fontColor: new ej.pdfexport.PdfColor(139, 69, 19),
                            fontSize: 9,
                            format: stringFormat,
                            fontStyle: ej.pdfexport.PdfFontStyle.Bold,
                            borderColor: new ej.pdfexport.PdfColor(160, 82, 45),
                            borders: borders
                        },
                        lineStyle: pen
                    },
                    holiday: {
                        fontFamily: ej.pdfexport.PdfFontFamily.TimesRoman,
                        fontSize: 10,
                        fontStyle: ej.pdfexport.PdfFontStyle.Bold,
                        borderColor: new ej.pdfexport.PdfColor(211, 211, 211),
                        backgroundColor: new ej.pdfexport.PdfColor(255, 248, 220),
                        fontColor: new ej.pdfexport.PdfColor(105, 105, 105),
                        format: vertical,
                        borders: borders
                    }
                }
            });
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'EndDate', headerText: 'End Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#GanttExport');