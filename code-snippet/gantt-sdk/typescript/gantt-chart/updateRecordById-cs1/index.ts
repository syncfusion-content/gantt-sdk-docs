


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

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
        allowEditing: true
    }
});

gantt.appendTo('#Gantt');

let updateBtn: Button = new Button();
updateBtn.appendTo('#updateRecord');

document.getElementById('updateRecord').addEventListener('click', () => {
    let data: Object = {
        TaskID: 3,
        TaskName: 'Updated by index value',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
    };
    gantt.updateRecordByID(data);
});