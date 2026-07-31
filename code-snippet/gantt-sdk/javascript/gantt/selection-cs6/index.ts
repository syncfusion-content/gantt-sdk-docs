import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    }
});

gantt.appendTo('#Gantt');

function selectRows(indexes: number[]): void {
    gantt.clearSelection();
    gantt.selectRows(indexes);
}

let buttons: { id: string; rows: number[] }[] = [
    { id: 'btn1', rows: [1, 3] },
    { id: 'btn2', rows: [0, 2] },
    { id: 'btn3', rows: [2, 4] },
    { id: 'btn4', rows: [0, 5] },
    { id: 'btn5', rows: [1, 6] },
    { id: 'btn6', rows: [0, 7, 2] },
    { id: 'btn7', rows: [1, 6, 7] },
    { id: 'btn8', rows: [4, 6, 7] },
    { id: 'btn9', rows: [2, 5, 6] }
];

buttons.forEach((btn) => {
    new Button().appendTo('#' + btn.id);
    document.getElementById(btn.id)!.addEventListener('click', () => {
        selectRows(btn.rows);
    });
});