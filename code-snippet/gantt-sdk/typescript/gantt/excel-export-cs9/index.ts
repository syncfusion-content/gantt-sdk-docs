import { Gantt, Toolbar, ExcelExport, Selection, ToolbarClickEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: (args: ToolbarClickEventArgs) => {
        if (args.item && args.item.id === 'GanttExport_excelexport') {
            gantt.excelExport();
        } else if (args.item && args.item.id === 'GanttExport_csvexport') {
            gantt.csvExport();
        }
    },
    queryCellInfo: (args: QueryCellInfoEventArgs) => {
        const d: any = args.data as any;

        if (d.TaskID === 4 && args.column && (args.column as any).field === 'TaskName') {
            (args as any).rowSpan = 2;
        }
        if (d.TaskID === 6 && args.column && (args.column as any).field === 'TaskName') {
            (args as any).colSpan = 2;
        }
    },
    excelQueryCellInfo: (args: any) => {
        const d: any = args.data;

        if (d.TaskID === 4 && args.column && args.column.field === 'TaskName') {
            args.rowSpan = 2;
        }
        if (d.TaskID === 6 && args.column && args.column.field === 'TaskName') {
            args.colSpan = 2;
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 120 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

gantt.appendTo('#GanttExport');