import {
    Gantt,
    Selection,
    Toolbar,
    Edit,
    PdfExport,
    IQueryTaskbarInfoEventArgs,
    PdfQueryTaskbarInfoEventArgs,
    EditSettingsModel,
    TaskFieldsModel
} from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, Toolbar, Edit, PdfExport);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    segments: 'Segments'
};

const editSettings: EditSettingsModel = {
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '450px',
    taskFields: taskFields,
    editSettings: editSettings,
    toolbar: ['PdfExport'],
    gridLines: 'Both',
    allowPdfExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'EndDate', headerText: 'End Date' }
    ],
    toolbarClick: (args: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport();
        }
    },
    queryTaskbarInfo: (args: IQueryTaskbarInfoEventArgs) => {
        const taskData: any = (args.data as any).taskData;
        if (taskData.Segments) {
            const segmentIndex = (args.taskbarElement as HTMLElement | null).dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                (args as any).taskbarBgColor = 'red';
                (args as any).taskbarBorderColor = 'black';
                (args as any).progressBarBgColor = 'green';
            }
        }
    },
    pdfQueryTaskbarInfo: (args: PdfQueryTaskbarInfoEventArgs) => {
        const taskbar: any = args.taskbar as any;
        if (taskbar.taskSegmentStyles && taskbar.taskSegmentStyles.length > 1) {
            taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
            taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
            taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
        }
    }
});

gantt.appendTo('#GanttExport');