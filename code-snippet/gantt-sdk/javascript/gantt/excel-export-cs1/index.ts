import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            dataSource: [GanttData[4]]
        };
        gantt.excelExport(excelExportProperties);
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
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');