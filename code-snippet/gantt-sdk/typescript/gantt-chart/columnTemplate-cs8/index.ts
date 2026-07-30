import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        {
            field: 'Discontinued',
            headerText: 'Discontinued',
            width: 150,
            textAlign: 'Center',
            template: '#checkboxTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: checkBoxTemplate
});

gantt.appendTo('#Gantt');

function checkBoxTemplate(args: QueryCellInfoEventArgs): void {
    if (args.column.field === 'Discontinued') {
        const checkbox = args.cell.querySelector('input') as HTMLInputElement;
        checkbox.checked = (args.data as any).Discontinued;
        checkbox.disabled = true;
    }
}
