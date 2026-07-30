import {
    Gantt,
    Toolbar,
    PdfExport,
    Selection,
    DayMarkers,
    PdfExportProperties
} from '@syncfusion/ej2-gantt';
import {
    PdfColor,
    PdfDashStyle,
    PdfPaddings,
    PdfBorders,
    PdfFontFamily,
    PdfFontStyle,
    PdfPen,
    PdfStringFormat,
    PdfTextAlignment
} from '@syncfusion/ej2-pdf-export';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection, DayMarkers);

let gantt: Gantt = new Gantt({
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
    toolbarClick: (args: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {

            const stringFormat = new PdfStringFormat();
            stringFormat.alignment = PdfTextAlignment.Center;

            const vertical = new PdfStringFormat();
            vertical.alignment = PdfTextAlignment.Center;

            const pen = new PdfPen(new PdfColor(105, 105, 105), 1);
            pen.dashStyle = PdfDashStyle.Dash;

            const borderPen = new PdfPen(new PdfColor(192, 192, 192), 1);
            const borders = new PdfBorders();
            borders.all = borderPen;

            const exportProperties: PdfExportProperties = {
                ganttStyle: {
                    connectorLineColor: new PdfColor(128, 0, 0),
                    taskbar: {
                        taskColor: new PdfColor(240, 128, 128),
                        taskBorderColor: new PdfColor(255, 0, 0),
                        progressColor: new PdfColor(205, 92, 92)
                    },
                    columnHeader: {
                        backgroundColor: new PdfColor(179, 219, 255)
                    },
                    timeline: {
                        backgroundColor: new PdfColor(179, 219, 255),
                        padding: new PdfPaddings(5, 2, 0, 0)
                    },
                    footer: {
                        backgroundColor: new PdfColor(205, 92, 92)
                    },
                    label: {
                        fontColor: new PdfColor(128, 0, 0)
                    },
                    cell: {
                        backgroundColor: new PdfColor(240, 248, 255),
                        fontColor: new PdfColor(0, 0, 0),
                        borderColor: new PdfColor(179, 219, 255)
                    },
                    fontFamily: 1,
                    eventMarker: {
                        label: {
                            backgroundColor: new PdfColor(255, 239, 213),
                            fontFamily: PdfFontFamily.TimesRoman,
                            fontColor: new PdfColor(139, 69, 19),
                            fontSize: 9,
                            format: stringFormat,
                            fontStyle: PdfFontStyle.Bold,
                            borderColor: new PdfColor(160, 82, 45),
                            borders: borders
                        },
                        lineStyle: pen
                    },
                    holiday: {
                        fontFamily: PdfFontFamily.TimesRoman,
                        fontSize: 10,
                        fontStyle: PdfFontStyle.Bold,
                        borderColor: new PdfColor(211, 211, 211),
                        backgroundColor: new PdfColor(255, 248, 220),
                        fontColor: new PdfColor(105, 105, 105),
                        format: vertical,
                        borders: borders
                    }
                }
            };

            gantt.pdfExport(exportProperties);
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

gantt.appendTo('#GanttExport');