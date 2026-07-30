import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '315px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowSelection: true
});

gantt.appendTo('#Gantt');

let rowInput: TextBox = new TextBox({ width: '150px', placeholder: 'e.g., 1' });
rowInput.appendTo('#rowIndex');

let dateInput: TextBox = new TextBox({ width: '150px', placeholder: 'MM/DD/YYYY' });
dateInput.appendTo('#scrollDate');

let taskInput: TextBox = new TextBox({ width: '150px', placeholder: 'e.g., 3' });
taskInput.appendTo('#taskId');

let selectBtn: Button = new Button();
selectBtn.appendTo('#selectRow');

let scrollDateBtn: Button = new Button();
scrollDateBtn.appendTo('#scrollToDate');

let scrollTaskBtn: Button = new Button();
scrollTaskBtn.appendTo('#scrollTask');

document.getElementById('selectRow')!.onclick = () => {
    let value: number = parseInt(rowInput.value as string, 10);
    if (!isNaN(value)) {
        gantt.selectionModule.selectRow(value);
        let position: number = gantt.rowHeight * value;
        gantt.setScrollTop(position);
    }
};

document.getElementById('scrollToDate')!.onclick = () => {
    let value: string = dateInput.value as string;
    if (value) {
        gantt.scrollToDate(value);
    }
};

document.getElementById('scrollTask')!.onclick = () => {
    let value: string = taskInput.value as string;
    if (value) {
        gantt.scrollToTask(value);
    }
};