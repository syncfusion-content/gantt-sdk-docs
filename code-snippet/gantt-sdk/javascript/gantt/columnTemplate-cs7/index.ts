import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { RadioButton } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: { position: '75%' },
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
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 },
        {
            field: 'OrderStatus',
            headerText: 'Order Status',
            width: 180,
            template: '#orderStatusTemplate'
        }
    ],
    queryCellInfo: radioTemplate
});

gantt.appendTo('#Gantt');

function radioTemplate(args: QueryCellInfoEventArgs): void {
    if (args.column.field === 'OrderStatus') {
        const container = args.cell.querySelector('.radio-container') as HTMLElement;
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';

        ['Pending', 'Confirmed', 'Shipped'].forEach((status: string) => {
            const input: HTMLInputElement = document.createElement('input');
            container.appendChild(input);

            new RadioButton({
                label: status,
                name: 'radio-' + (args.data as any).TaskID,
                checked: (args.data as any).OrderStatus === status,
                cssClass: 'e-success'
            }).appendTo(input);
        });
    }
}