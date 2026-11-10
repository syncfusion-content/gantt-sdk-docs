import {
    Gantt,
    Toolbar,
    PdfExport,
    Selection,
    PdfExportProperties,
    ToolbarClickEventArgs
} from '@syncfusion/ej2-gantt';
import { adventProFont, data } from './datasource.ts';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Gantt.Inject(Toolbar, PdfExport, Selection);

const clickHandler = (args: ToolbarClickEventArgs): void => {
    if (args.item.id === 'Gantt_pdfexport') {
        const exportProperties: PdfExportProperties = {
            fileName: 'project-arabic.pdf',
            ganttStyle: {
                font: new PdfTrueTypeFont(adventProFont, 12)
            }
        };

        gantt.pdfExport(exportProperties);
    }
};

const gantt: Gantt = new Gantt({
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
        {
            field: 'TaskID',
            headerText: 'معرف',
            width: 80
        },
        {
            field: 'TaskName',
            headerText: 'اسم المهمة',
            width: 250
        }
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});

gantt.appendTo('#Gantt');