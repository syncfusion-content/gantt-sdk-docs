import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection, DayMarkers } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { PdfColor, PdfDashStyle, PdfPaddings, PdfBorders, PdfFontFamily, PdfFontStyle, PdfPen, PdfStringFormat, PdfTextAlignment } from '@syncfusion/ej2-pdf-export';

function App() {

    let ganttInstance = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        predecessor: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    const eventMarkers = [
        { day: '04/10/2019', cssClass: 'e-custom-event-marker', label: 'Project approval and kick-off' }
    ];

    const holidays = [
        { from: "04/04/2019", to: "04/04/2019", label: " Public holidays", cssClass: "e-custom-holiday" },
        { from: "04/12/2019", to: "04/12/2019", label: " Public holiday", cssClass: "e-custom-holiday" }
    ];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttInstance) {

            const stringFormat = new PdfStringFormat();
            stringFormat.alignment = PdfTextAlignment.Center;

            const vertical = new PdfStringFormat();
            vertical.alignment = PdfTextAlignment.Center;

            const pen = new PdfPen(new PdfColor(105, 105, 105), 1);
            pen.dashStyle = PdfDashStyle.Dash;

            const borderPen = new PdfPen(new PdfColor(192, 192, 192), 1);
            const borders = new PdfBorders();
            borders.all = borderPen;

            const exportProperties = {
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

            ganttInstance.pdfExport(exportProperties);
        }
    }

    return (
        <GanttComponent
            ref={(g) => ganttInstance = g}
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            eventMarkers={eventMarkers}
            holidays={holidays}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="EndDate" headerText="End Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection, DayMarkers]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));