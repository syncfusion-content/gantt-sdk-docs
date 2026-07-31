import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let dropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'TaskID', value: 'TaskID' },
        { text: 'TaskName', value: 'TaskName' },
        { text: 'StartDate', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: 120
});
dropDown.appendTo('#fieldDropDown');

let textBox: TextBox = new TextBox({
    placeholder: 'Enter new width',
    width: 120
});
textBox.appendTo('#widthBox');

let resizeBtn: Button = new Button();
resizeBtn.appendTo('#resizeBtn');

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: { position: '75%' },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120, textAlign: 'Right' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 120, textAlign: 'Right' }
    ]
});
gantt.appendTo('#Gantt');

document.getElementById('resizeBtn')!.addEventListener('click', () => {
    let field: string = dropDown.value as string;
    let width: string = textBox.element.value;
    if (field && width) {
        let column = gantt.treeGrid.getColumnByField(field);
        if (column) {
            column.width = width;
            gantt.treeGrid.refreshColumns();
        }
    }
});