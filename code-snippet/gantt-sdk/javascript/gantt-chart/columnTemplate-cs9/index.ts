import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { Dialog } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let dialogObj: Dialog = new Dialog({
    visible: false,
    width: '50%',
    showCloseIcon: true,
    header: 'Selected Row Details'
});
dialogObj.appendTo('#Dialog');

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
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        {
            headerText: 'Employee Data',
            width: 150,
            template: '#buttonTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: buttonTemplate
});

gantt.appendTo('#Gantt');

function buttonTemplate(args: QueryCellInfoEventArgs): void {
    if (args.column.headerText === 'Employee Data') {
        const btnElement = args.cell.querySelector('.view-btn') as HTMLElement;

        const btn: Button = new Button({
            cssClass: 'e-outline'
        });
        btn.appendTo(btnElement);

        btnElement.addEventListener('click', () => {
            const data: any = args.data;
            dialogObj.content =
                `<p><b>TaskID:</b> ${data.TaskID}</p>
                 <p><b>TaskName:</b> ${data.TaskName}</p>
                 <p><b>Duration:</b> ${data.Duration}</p>`;
            dialogObj.show();
        });
    }
}