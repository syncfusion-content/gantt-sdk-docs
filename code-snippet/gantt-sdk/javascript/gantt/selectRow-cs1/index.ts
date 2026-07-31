import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { TextBox } from '@syncfusion/ej2-inputs';
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
        type: 'Single'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 200 },
        { field: 'StartDate', width: 120, format: 'yMd' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');

let textBox: TextBox = new TextBox({ width: '100px' });
textBox.appendTo('#rowIndex');

let selectBtn: Button = new Button();
selectBtn.appendTo('#selectRow');

document.getElementById('selectRow')!.addEventListener('click', () => {
    let index: number = parseInt(textBox.value as string, 10);
    if (!isNaN(index)) {
        gantt.selectRow(index);
    }
});