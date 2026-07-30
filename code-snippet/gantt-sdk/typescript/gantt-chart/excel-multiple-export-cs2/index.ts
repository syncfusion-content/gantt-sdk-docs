import { Gantt, Toolbar,ExcelExport, Selection }  from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { firstGanttData, secondGanttData } from './datasource.ts';

Gantt.Inject(Toolbar, ExcelExport,Selection);

let firstGantt: Gantt = new Gantt({
    dataSource: firstGanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    height: '280px',
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    allowExcelExport: true,
    toolbar: ['ExcelExport']
});
firstGantt.appendTo('#GanttExport1');

let secondGantt: Gantt = new Gantt({
    dataSource: secondGanttData,
    height: '250px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowExcelExport: true
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport1_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'NewSheet' }
        };

        let firstGanttExport: Promise<any> = firstGantt.excelExport(appendExcelExportProperties, true);
        firstGanttExport.then((fData: any) => {
            secondGantt.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}