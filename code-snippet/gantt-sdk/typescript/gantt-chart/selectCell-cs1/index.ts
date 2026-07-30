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
        mode: 'Cell',
        type: 'Single'
    }
});
gantt.appendTo('#Gantt');

let rowTextBox: TextBox = new TextBox({
    width: '100'
});
rowTextBox.appendTo('#rowIndex');

let cellTextBox: TextBox = new TextBox({
    width: '100'
});
cellTextBox.appendTo('#cellIndex');

let selectBtn: Button = new Button();
selectBtn.appendTo('#selectCell');

document.getElementById('selectCell')!.addEventListener('click', () => {
    let rowIndex: number = parseInt(rowTextBox.value as string, 10);
    let cellIndex: number = parseInt(cellTextBox.value as string, 10);

    if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
        gantt.selectCell({ rowIndex, cellIndex });
    }
});