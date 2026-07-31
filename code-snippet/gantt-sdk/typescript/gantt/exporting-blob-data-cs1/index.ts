import {
    Gantt, Toolbar, PdfExport, ExcelExport, Selection,
    PdfExportProperties, ExcelExportProperties
} from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    toolbar: ['PdfExport', 'ExcelExport'],
    allowPdfExport: true,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ],
    toolbarClick: (args: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport(undefined as unknown as PdfExportProperties, undefined, undefined, true);
        }
        if (args.item.id === 'GanttExport_excelexport') {
            gantt.excelExport(undefined as unknown as ExcelExportProperties, undefined, undefined, true);
        }
    },
    excelExportComplete: (args: any) => {
        args.promise.then((e: { blobData: Blob }) => {
            exportBlob(e.blobData);
        });
    },
    pdfExportComplete: (args: any) => {
        args.promise.then((e: { blobData: Blob }) => {
            exportBlob(e.blobData);
        });
    }
});

gantt.appendTo('#GanttExport');

function exportBlob(blob: Blob): void {
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const url: string = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}