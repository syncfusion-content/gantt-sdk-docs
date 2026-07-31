import { Gantt, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Gantt.Inject(Edit, Toolbar, Sort, Filter);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    allowFiltering: true,
    enablePersistence: true,
    toolbar: ['Add','Edit','Delete','Update','Cancel','Search','ExpandAll','CollapseAll','PrevTimeSpan','NextTimeSpan','Indent','Outdent'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    splitterSettings: { columnIndex: 2 },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 290 },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');

let saveBtn: Button = new Button({ cssClass: 'e-success' });
saveBtn.appendTo('#saveBtn');

let restoreBtn: Button = new Button({ cssClass: 'e-danger' });
restoreBtn.appendTo('#restoreBtn');

document.getElementById('saveBtn')!.addEventListener('click', () => {
    const persistData = gantt.getPersistData();
    if (persistData) {
        localStorage.setItem('ganttTaskDetails', persistData);
    }
});

document.getElementById('restoreBtn')!.addEventListener('click', () => {
    const value = localStorage.getItem('ganttTaskDetails');
    if (value) {
        const state = JSON.parse(value);
        gantt.treeGrid.setProperties(state);
    }
});