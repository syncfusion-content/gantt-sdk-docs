import { Gantt, Toolbar, ExcelExport, Selection, TaskFieldsModel, ToolbarItem, ColumnModel } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const toolbar: ToolbarItem[] = ['ExcelExport'];

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 180 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 120 },
    { field: 'Progress', headerText: 'Progress', width: 120 }
];

let gantt: Gantt = new Gantt({
    height: '450px',
    dataSource: GanttData,
    taskFields,
    columns,
    toolbar,
    allowExcelExport: true,

    toolbarClick: (args: ClickEventArgs) => {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            gantt.showSpinner();
            setTimeout(() => {
                gantt.excelExport();
            }, 2000);
        }
    },

    excelExportComplete: (_args: ExcelExportCompleteArgs) => {
        gantt.hideSpinner();
    }
});

gantt.appendTo('#GanttDefault');