import { Gantt, Edit, Toolbar, Selection, ContextMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Toolbar, Selection, ContextMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    enableContextMenu: true
});

gantt.appendTo('#Gantt');