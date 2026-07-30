import { Gantt, Toolbar, PdfExport, Selection, TaskFieldsModel, ToolbarClickEventArgs, PdfQueryTimelineCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    height: '430px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    } as TaskFieldsModel,
    treeColumnIndex: 1,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: (args: ToolbarClickEventArgs) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport();
        }
    },
    pdfQueryTimelineCellInfo: (args: PdfQueryTimelineCellInfoEventArgs) => {
        args.timelineCell.backgroundColor = new PdfColor(240, 248, 255);
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