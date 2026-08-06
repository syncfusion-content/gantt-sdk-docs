import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    height: '370px',
    dataSource: GanttData,
    enableHover: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Cell',
        type: 'Multiple'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');

function selectCells(rowIndex: number, cellIndex: number): void {
    gantt.clearSelection();
    gantt.selectCells([
        { rowIndex: rowIndex, cellIndexes: [cellIndex] }
    ]);
}

['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8'].forEach((id, i) => {
    new Button().appendTo('#' + id);
});

(document.getElementById('btn0') as HTMLElement).onclick = () => selectCells(0, 0);
(document.getElementById('btn1') as HTMLElement).onclick = () => selectCells(1, 1);
(document.getElementById('btn2') as HTMLElement).onclick = () => selectCells(2, 2);
(document.getElementById('btn3') as HTMLElement).onclick = () => selectCells(3, 3);
(document.getElementById('btn4') as HTMLElement).onclick = () => selectCells(4, 4);
(document.getElementById('btn5') as HTMLElement).onclick = () => selectCells(5, 0);
(document.getElementById('btn6') as HTMLElement).onclick = () => selectCells(6, 1);
(document.getElementById('btn7') as HTMLElement).onclick = () => selectCells(7, 2);
(document.getElementById('btn8') as HTMLElement).onclick = () => selectCells(3, 4);