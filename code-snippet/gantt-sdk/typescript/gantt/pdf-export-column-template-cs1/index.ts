import { Gantt, Toolbar, PdfExport, Selection, PdfQueryCellInfoEventArgs, ColumnModel, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { data, resources } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    allowResizing: true,
    splitterSettings: { columnIndex: 4 },
    resources: resources,
    resourceFields: { id: 'resourceId', name: 'resourceName' },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'resources', headerText: 'Resources', width: 250 },
        { field: 'EmailId', headerText: 'Email ID', width: 150 }
    ],
    toolbarClick: (args: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            const exportProps: PdfExportProperties = { fileName: 'new.pdf' };
            gantt.pdfExport(exportProps);
        }
    },
    pdfQueryCellInfo: (args: PdfQueryCellInfoEventArgs) => {
        const col = args.column as ColumnModel;
        if (col && col.headerText === 'Resources') {
            const base64: string = (args.data as any).taskData.resourcesImage;
            (args as any).image = { height: 40, width: 40, base64: base64 };
        }
        if (col && col.headerText === 'Email ID') {
            const email: string = (args.data as any).taskData.EmailId;
            (args as any).hyperLink = { target: 'mailto:' + email, displayText: email };
        }
    }
});

gantt.appendTo('#GanttExport');