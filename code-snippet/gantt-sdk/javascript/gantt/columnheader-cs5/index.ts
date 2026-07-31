import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');

let columnData: Object[] = [
    { text: 'TaskName', value: 'TaskName' },
    { text: 'StartDate', value: 'StartDate' },
    { text: 'Duration', value: 'Duration' },
    { text: 'Progress', value: 'Progress' }
];

let dropDown: DropDownList = new DropDownList({
    dataSource: columnData,
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '150px'
});
dropDown.appendTo('#columnList');

let textBox: TextBox = new TextBox({
    placeholder: 'Enter new header text',
    width: '200px'
});
textBox.appendTo('#headerText');

let button: Button = new Button({ cssClass: 'e-outline' });
button.appendTo('#changeHeader');

document.getElementById('changeHeader')!.addEventListener('click', () => {
    let selectedField: string = dropDown.value as string;
    let column: any = gantt.treeGrid.grid.getColumnByField(selectedField);
    if (column && textBox.element.value.trim() !== '') {
        column.headerText = textBox.element.value;
        gantt.treeGrid.grid.refreshHeader();
    }
});