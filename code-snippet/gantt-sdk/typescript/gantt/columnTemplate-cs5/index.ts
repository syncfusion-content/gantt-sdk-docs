import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

let dropData: string[] = ['High', 'Medium', 'Low'];

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        priority: 'Priority',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 260 },
        {
            field: 'Priority',
            headerText: 'Task Priority',
            template: '#columnTemplate',
            width: 200
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: dropdown
});

gantt.appendTo('#Gantt');

function dropdown(args: QueryCellInfoEventArgs): void {
    if (args.column.field === 'Priority') {
        let drop: DropDownList = new DropDownList({
            dataSource: dropData,
            value: (args.data as any).Priority,
            popupHeight: '150px',
            popupWidth: '150px'
        });
        drop.appendTo(args.cell.querySelector('#dropElement') as HTMLElement);
    }
}