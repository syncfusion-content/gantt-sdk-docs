import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties, ClickEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, visible: false },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    toolbarClick: (args: ClickEventArgs): void => {
        if (args.item.id === 'Gantt_pdfexport') {
            let exportProps: PdfExportProperties = {
                includeHiddenColumn: true
            };
            gantt.pdfExport(exportProps);
        }
    }
});

gantt.appendTo('#Gantt');