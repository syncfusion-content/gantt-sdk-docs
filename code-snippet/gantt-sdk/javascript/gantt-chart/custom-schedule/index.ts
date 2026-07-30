import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        manual: 'isManual'
    },
    taskMode:"Custom", 
    treeColumnIndex: 1,
    validateManualTasksOnLinking: true,
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel', 'CollapseAll',  'ExpandAll', 'Search'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName' },
        { field: 'isManual' }
    ],
});
gantt.appendTo('#Gantt');