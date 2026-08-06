


import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Toolbar, Selection);

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
    toolbar: ['Delete'],
    editSettings: {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    }
});

gantt.appendTo('#Gantt');