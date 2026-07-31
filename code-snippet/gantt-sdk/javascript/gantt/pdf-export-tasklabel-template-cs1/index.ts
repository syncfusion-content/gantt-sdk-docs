import {
    Gantt,
    Toolbar,
    PdfExport,
    Selection,
    PdfExportProperties,
    PdfQueryTaskbarInfoEventArgs
} from '@syncfusion/ej2-gantt';
import { base64Data, editingResources } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let gantt: Gantt = new Gantt({
    id: 'Gantt',
    dataSource: base64Data,
    height: '450px',
    rowHeight: 60,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    },
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/30/2019'),
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        leftLabel: '${TaskName} [ ${Progress}% ]',
        rightLabel: '${resourceNames}',
        taskLabel: '${Progress}%'
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' }
    ],
    toolbarClick: (args: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            const exportProps: PdfExportProperties = { enableFooter: false };
            gantt.pdfExport(exportProps);
        }
    },
    pdfQueryTaskbarInfo: (args: PdfQueryTaskbarInfoEventArgs) => {
        const gp: any = (args.data as any).ganttProperties;

        if (args.labelSettings && gp) {
            args.labelSettings.leftLabel.value = `${gp.taskName}[${gp.progress}]`;

            if (gp.resourceNames) {
                args.labelSettings.rightLabel.value = gp.resourceNames;
                args.labelSettings.rightLabel.image = [{
                    base64: (args.data as any).taskData.resourcesImage,
                    width: 20,
                    height: 20
                }];
            }

            args.labelSettings.taskLabel.value = `${gp.progress}%`;
        }
    }
});

gantt.appendTo('#GanttExport');