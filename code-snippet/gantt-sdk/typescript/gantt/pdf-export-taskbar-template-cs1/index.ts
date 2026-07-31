import {
    Gantt,
    Toolbar,
    PdfExport,
    Selection,
    PdfQueryTaskbarInfoEventArgs,
    PdfExportProperties
} from '@syncfusion/ej2-gantt';
import { base64Data, editingResources } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let gantt: Gantt = new Gantt({
    id: 'Gantt',
    dataSource: base64Data,
    height: '450px',
    rowHeight: 45,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        child: 'subtasks',
        resourceInfo: 'resources'
    },
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    splitterSettings: {
        columnIndex: 2
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' }
    ],
    toolbarClick: (args: any) => {
        if (args.item.text === 'PDF export') {
            const exportProps: PdfExportProperties = {
                enableFooter: false
            };
            gantt.pdfExport(exportProps);
        }
    },
    pdfQueryTaskbarInfo: (args: PdfQueryTaskbarInfoEventArgs) => {
        const data: any = args.data;
        if (data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20,
                height: 20,
                base64: data.taskData.resourcesImage
            }];
            args.taskbarTemplate.value = data.TaskName;
        }
    }
});

gantt.appendTo('#GanttExport');