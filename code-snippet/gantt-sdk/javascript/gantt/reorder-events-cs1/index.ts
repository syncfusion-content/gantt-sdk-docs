import { Gantt, Reorder, ColumnDragEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Reorder);

let messageElement: HTMLParagraphElement = document.getElementById('message') as HTMLParagraphElement;

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    allowReordering: true,
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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    columnDragStart: (args: ColumnDragEventArgs) => {
        messageElement.textContent = 'columnDragStart event triggered';
        if (args.column.field === 'TaskName') {
            args.column.headerText = 'Project Task';
            messageElement.textContent = `Header text changed for column: ${args.column.field}`;
        }
    },
    columnDrag: (args: ColumnDragEventArgs) => {
        messageElement.textContent = 'columnDrag event triggered';
        if (args.column.field === 'Duration') {
            args.column.allowReordering = false;
            messageElement.textContent = `Reordering disabled for column: ${args.column.field}`;
        }
    },
    columnDrop: (args: ColumnDragEventArgs) => {
        messageElement.textContent = 'columnDrop event triggered';
        if (args.column.field === 'TaskID') {
            args.column.allowReordering = false;
            messageElement.textContent = `Reordering cancelled for column: ${args.column.field}`;
        }
    }
});

gantt.appendTo('#Gantt');