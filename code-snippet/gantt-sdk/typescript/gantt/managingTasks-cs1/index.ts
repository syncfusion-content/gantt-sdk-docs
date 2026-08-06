


import { Gantt, Edit, ContextMenu, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, ContextMenu, Selection);

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
    enableContextMenu: true,
    editSettings: {
        allowAdding: true
    },
});
gantt.appendTo('#Gantt');