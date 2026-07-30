import { Gantt, RowDD, Edit, Selection, RowDragEventArgs } from '@syncfusion/ej2-gantt';
import { ganttData, GanttTask } from './datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

const gantt = new Gantt({
    dataSource: ganttData,
    height: '380px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    selectionSettings: {
        type: 'Multiple'
    },
    editSettings: {
        allowDeleting: true
    },
    splitterSettings: {
        position: '75%'
    },
    rowDragStartHelper: rowDragStartHelper,
    rowDragStart: rowDragStart,
    rowDrag: rowDrag,
    rowDrop: rowDrop,
});
gantt.appendTo('#Gantt');

function rowDragStartHelper(args: RowDragEventArgs) {
    const text= document.getElementById('message') as HTMLElement;
    text.textContent = 'rowDragStartHelper event triggered';
    const draggedTask = (args.data as GanttTask[])[0];
    if (draggedTask && draggedTask.TaskID === 2) {
        args.cancel = true;
        text.textContent = 'Drag cancelled for TaskID 2';
    }
}

function rowDragStart(args: RowDragEventArgs) {
    const text= document.getElementById('message') as HTMLElement;
    text.textContent='rowDragStart event triggered';
    const draggedTask = (args.data as GanttTask[])[0];
    if (draggedTask.Progress as number < 50) {
        args.rows.forEach((row: HTMLElement) => {
            (row as HTMLElement).style.background = '#ec9ec8ff';
        });
    }
}

function rowDrag(args: RowDragEventArgs)  {
    const text= document.getElementById('message') as HTMLElement;
    text.textContent='rowDrag event triggered';
    const draggedTask = (args.data as GanttTask[])[0];
    if (draggedTask.Progress as number > 50) {
        args.rows.forEach((row : HTMLElement) => {
            (row as HTMLElement).style.background = '#c5f4fdde';
        });
    }
}

function rowDrop(args: RowDragEventArgs)  {
    const text= document.getElementById('message') as HTMLElement;
    text.textContent='rowDrop event triggered';
    const draggedTask = (args.data as GanttTask[])[0];
    if (draggedTask.TaskID === 4) {
        args.cancel = true;
        text.textContent ='Drop cancelled for TaskID 4'
    }
}