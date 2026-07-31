import { Gantt, Toolbar, ExcelExport, Filter, ClickEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport', 'CsvExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'StartDate', width: 150, visible: false },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'GanttDefault_excelexport') {
            const excelExportProperties = { enableFilter: true };
            gantt.excelExport(excelExportProperties);
        }
    }
});

gantt.appendTo('#GanttDefault');