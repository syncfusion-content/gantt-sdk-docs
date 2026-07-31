


import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex:1,
    splitterSettings: {
        position: '75%'
    },
    rowHeight: 42
});
gantt.appendTo('#Gantt');

let small: Button = new Button();
small.appendTo('#small');

document.getElementById('small').addEventListener('click', () => {
    gantt.rowHeight = 20;
});

let medium: Button = new Button();
medium.appendTo('#medium');

document.getElementById('medium').addEventListener('click', () => {
    gantt.rowHeight = 42;
});

let big: Button = new Button();
big.appendTo('#big');

document.getElementById('big').addEventListener('click', () => {
    gantt.rowHeight = 60;
});