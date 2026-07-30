import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: true
        };
        gantt.excelExport(excelExportProperties);
    }
    else if (args.item.id === 'GanttExport_csvexport') {
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: true
        };
        gantt.csvExport(excelExportProperties);
    }
};

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
    treeColumnIndex: 1,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150',visible:false },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    toolbar: ['ExcelExport','CsvExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');