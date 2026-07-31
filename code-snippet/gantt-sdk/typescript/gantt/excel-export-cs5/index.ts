import { Gantt, Toolbar, ExcelExport, Selection, ClickEventArgs, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        taskLabel: '${Progress}%'
    },
    splitterSettings: {
        columnIndex: 3
    },
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100, visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 }
    ],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            gantt.excelExport();
        }
    },
    excelQueryCellInfo: (args: ExcelQueryCellInfoEventArgs) => {
        if (args.column && args.column.field === 'Progress') {
            const progressValue: number = args.value as number;
            if (progressValue > 80) {
                args.style = { backColor: '#A569BD' };
            } else if (progressValue < 20) {
                args.style = { backColor: '#F08080' };
            }
        }
    },
    queryTaskbarInfo: (args: IQueryTaskbarInfoEventArgs) => {
        const progress: number = (args.data as { Progress: number }).Progress;
        if (progress > 80) {
            args.progressBarBgColor = '#6C3483';
            args.taskbarBgColor = args.taskbarBorderColor = '#A569BD';
        } else if (progress < 20) {
            args.progressBarBgColor = '#CD5C5C';
            args.taskbarBgColor = args.taskbarBorderColor = '#F08080';
        }
    },
    queryCellInfo: (args: QueryCellInfoEventArgs) => {
        if ((args.column as Column).field === 'Progress') {
            const progress: number = (args.data as { Progress: number }).Progress;
            if (progress > 80) {
                (args.cell as HTMLElement).style.backgroundColor = '#A569BD';
            } else if (progress < 20) {
                (args.cell as HTMLElement).style.backgroundColor = '#F08080';
            }
        }
    }
});

gantt.appendTo('#GanttDefault');