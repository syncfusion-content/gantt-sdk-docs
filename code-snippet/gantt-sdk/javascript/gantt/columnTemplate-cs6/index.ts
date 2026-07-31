import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ChipList } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
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
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 290,
            template: '#chipTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: chipTemplate
});

gantt.appendTo('#Gantt');

function chipTemplate(args: QueryCellInfoEventArgs): void {
    if (args.column.field === 'TaskName') {
        const chip: ChipList = new ChipList({
            chips: [(args.data as any).TaskName]
        });
        chip.appendTo(args.cell.querySelector('.chipElement') as HTMLElement);
    }
}