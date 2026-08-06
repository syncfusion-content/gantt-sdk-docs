import { Gantt, Toolbar, PdfExport, PdfExportProperties, ClickEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource';

Gantt.Inject(Toolbar, PdfExport);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        const name: string = (document.getElementById('name') as HTMLInputElement)?.value || '';
        const email: string = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const message: string = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

        const headerText: string = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        const exportProperties: PdfExportProperties = {
            header: {
                fromTop: 100,
                height: 150,
                contents: [
                    {
                        type: 'Text',
                        value: headerText,
                        position: { x: 50, y: 30 },
                        style: {
                            textBrushColor: '#C25050',
                            fontSize: 30,
                            hAlign: 'Center',
                            vAlign: 'Top'
                        }
                    }
                ]
            },
            footer: {
                fromBottom: 0,
                height: 0,
                contents: []
            },
            fitToWidthSettings: {
                isFitToWidth: true
            }
        };
        ganttChart.pdfExport(exportProperties);
    }
};

let ganttChart: Gantt = new Gantt({
    dataSource: GanttData,
    height: '520px',
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
    toolbarClick: clickHandler,
    treeColumnIndex: 1
});
ganttChart.appendTo('#GanttExport');
