import { Gantt, Selection, ContextMenu, Edit, Sort, Resize } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Selection, ContextMenu, Edit, Sort, Resize);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    enableContextMenu: true,
    allowSorting: true,
    allowResizing: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    }
});

gantt.appendTo('#Gantt');