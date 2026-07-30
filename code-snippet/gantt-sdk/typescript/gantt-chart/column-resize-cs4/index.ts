import { Gantt, Resize, ResizeEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize);

let messageRef: HTMLParagraphElement = document.getElementById('message') as HTMLParagraphElement;

function updateMessage(text: string): void {
    messageRef.textContent = text;
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: { position: '90%' },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ],
    resizeStart: (args: ResizeEventArgs) => {
        updateMessage('resizeStart event triggered');
        if (args.column.field === 'TaskID') {
            args.cancel = true;
            updateMessage('resizeStart event triggered and cancelled for TaskID');
        }
    },
    resizing: () => {
        updateMessage('resizing event triggered');
    },
    resizeStop: (args: ResizeEventArgs) => {
        updateMessage('resizeStop event triggered');

        const headerCell = gantt.treeGrid.grid.getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');

        const cells = gantt.treeGrid.grid
            .getContentTable()
            .querySelectorAll(`[aria-colindex="${args.column.index + 1}"]`);

        cells.forEach((cell: HTMLElement) => {
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        });
    }
});

gantt.appendTo('#Gantt');