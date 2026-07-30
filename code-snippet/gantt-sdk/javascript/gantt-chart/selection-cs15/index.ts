import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    enableHover: true,
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
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
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 220 },
        { field: 'StartDate', width: 150, format: 'yMd' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');

let startInput: TextBox = new TextBox({ type: 'number', width: '120px' });
startInput.appendTo('#startRow');

let endInput: TextBox = new TextBox({ type: 'number', width: '120px' });
endInput.appendTo('#endRow');

let selectBtn: Button = new Button({ content: 'Select Rows' });
selectBtn.appendTo('#selectRows');

document.getElementById('selectRows')!.addEventListener('click', () => {
    let start: number = parseInt(startInput.value as string, 10);
    let end: number = parseInt(endInput.value as string, 10);

    if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= start) {
        gantt.clearSelection();
        gantt.selectionModule.selectRowsByRange(start, end);
    }
});