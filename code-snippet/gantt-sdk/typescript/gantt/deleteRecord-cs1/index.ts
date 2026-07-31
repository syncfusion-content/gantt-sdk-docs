


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';
import { getValue } from  '@syncfusion/ej2-base';

Gantt.Inject(Edit, Selection);

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
        allowDeleting: true
    }
});
gantt.appendTo('#Gantt');

let delBtn: Button = new Button();
delBtn.appendTo('#deleteRecord');

document.getElementById('deleteRecord').addEventListener('click', () => {
    gantt.editModule.deleteRecord(getValue('TaskID', gantt.selectionModule.getSelectedRecords()[0]));
});