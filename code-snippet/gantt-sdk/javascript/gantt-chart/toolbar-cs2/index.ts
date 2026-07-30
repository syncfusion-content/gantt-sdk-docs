import { Gantt, Toolbar, Selection, Edit, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Selection, Edit, Filter);

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
        parentID: 'ParentID'
    },
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    }
});
gantt.appendTo('#Gantt');