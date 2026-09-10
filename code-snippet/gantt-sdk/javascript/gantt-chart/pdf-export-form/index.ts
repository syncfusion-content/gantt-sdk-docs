import { Gantt, Toolbar, PdfExport, ToolbarClickEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport);

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    height: '520px',
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
    toolbarClick: (args: ToolbarClickEventArgs) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            const name: string = (document.getElementById('name') as HTMLInputElement).value || '';
            const email: string = (document.getElementById('email') as HTMLInputElement).value || '';
            const message: string = (document.getElementById('message') as HTMLTextAreaElement).value || '';

            const headerText: string =
                `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

            const exportProperties = {
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

            gantt.pdfExport(exportProperties);
        }
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#GanttExport');