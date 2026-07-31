import { Gantt, Toolbar, PdfExport, Selection, ToolbarClickEventArgs, PdfQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: (args: ToolbarClickEventArgs) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport();
        }
    },
    pdfQueryTaskbarInfo: (args: PdfQueryTaskbarInfoEventArgs) => {
        const d: any = args.data;
        if (d.Progress < 50 && !d.hasChildRecords) {
            const bar = args.taskbar;
            bar.progressColor = new PdfColor(205, 92, 92);
            bar.taskColor = bar.taskBorderColor = new PdfColor(240, 128, 128);
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, visible: false },
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

gantt.appendTo('#GanttExport');