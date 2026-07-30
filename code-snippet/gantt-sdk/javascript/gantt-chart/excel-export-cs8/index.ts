import { Gantt, Toolbar, ExcelExport, ClickEventArgs } from '@syncfusion/ej2-gantt';
import { TextBox } from '@syncfusion/ej2-inputs';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport);

let fileNameBox: TextBox = new TextBox({
    placeholder: 'Enter file name',
    width: 120
});
fileNameBox.appendTo('#fileNameBox');

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    splitterSettings: { columnIndex: 1 },
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
        if (args.item.id === 'ganttDefault_excelexport') {
            const name: string = fileNameBox.value && fileNameBox.value.toString().trim() !== ''
                ? fileNameBox.value.toString().trim()
                : 'new';

            const excelProps: ExcelExportProperties = {
                fileName: `${name}.xlsx`
            };

            gantt.excelExport(excelProps);
        }
    }
});

gantt.appendTo('#ganttDefault');