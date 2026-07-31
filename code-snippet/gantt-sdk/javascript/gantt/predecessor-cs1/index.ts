import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
    },
});
gantt.appendTo('#Gantt');

let add: Button = new Button();
add.appendTo('#add');

let update: Button = new Button();
update.appendTo('#update');

let remove: Button = new Button();
remove.appendTo('#remove');

document.getElementById('add').addEventListener('click', () => {
    gantt.addPredecessor(2, '3SF,7FS');
});

document.getElementById('remove').addEventListener('click', () => {
    gantt.removePredecessor(4);
});

document.getElementById('update').addEventListener('click', () => {
    gantt.updatePredecessor(8, '7FS');
});