


import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection, Toolbar);

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
    toolbar: ['Indent', 'Outdent'],
    editSettings: {
        allowEditing: true
    }
});
gantt.appendTo('#Gantt');

let ind: Button = new Button();
ind.appendTo('#indent');
let out: Button = new Button();
out.appendTo('#outdent');
document.getElementById('indent').addEventListener('click', () => {
   gantt.indent();
});
document.getElementById('outdent').addEventListener('click', () => {
   gantt.outdent();
});