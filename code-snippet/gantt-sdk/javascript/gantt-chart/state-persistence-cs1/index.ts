import { Gantt, Toolbar, Edit, Sort, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Gantt.Inject(Toolbar, Edit, Sort, Filter);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    enablePersistence: true,
    allowSorting: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 2
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 290 },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#TaskDetails');

let restoreBtn: Button = new Button();
restoreBtn.appendTo('#restore');

(document.getElementById('restore') as any).addEventListener('click', () => {
    const id = 'TaskDetails' + Math.floor(Math.random() * 10);
    gantt.element.id = id;
    location.reload();
});