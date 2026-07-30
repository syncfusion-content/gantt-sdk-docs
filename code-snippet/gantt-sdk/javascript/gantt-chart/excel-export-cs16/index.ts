import { Gantt, Toolbar, ExcelExport, ClickEventArgs } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties, Column } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport);

let gantt: Gantt = new Gantt({
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
    allowExcelExport: true,
    toolbar: ['ExcelExport', 'CsvExport'],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            const exportColumns: Partial<Column>[] = [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Project Name', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' }
            ];

            const excelExportProperties: ExcelExportProperties = {
                columns: exportColumns as Column[]
            };

            gantt.excelExport(excelExportProperties);
        }
    }
});

gantt.appendTo('#GanttDefault');