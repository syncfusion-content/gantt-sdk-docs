


import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Edit);

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
    editSettings: {
        allowAdding: true
    }
});
gantt.appendTo('#Gantt');

let addBtn: Button = new Button();
addBtn.appendTo('#addRow');

document.getElementById('addRow').addEventListener('click', () => {
    let record: Object = {
        TaskID: 10,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        Duration: 3,
        Progress: 50
    };
    gantt.editModule.addRecord(record, 'Below', 2);
});