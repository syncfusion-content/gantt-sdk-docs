import { Gantt, Toolbar, ExcelExport, Selection, TaskFieldsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

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

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    treeColumnIndex: 1,
    taskFields,
    toolbar: ['ExcelExport', 'CsvExport'],
    allowExcelExport: true,
    columns,
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            gantt.excelExport(undefined, undefined, undefined, true);
        }
        if (args.item && args.item.id === 'GanttDefault_csvexport') {
            gantt.csvExport(undefined, undefined, undefined, true);
        }
    },
    excelExportComplete: (args: ExcelExportCompleteArgs) => {
        const a: any = args as any;
        if (a && a.promise) {
            a.promise.then((e: { blobData: Blob }) => {
                exportBlob(e.blobData);
            });
        }
    }
});

gantt.appendTo('#GanttDefault');