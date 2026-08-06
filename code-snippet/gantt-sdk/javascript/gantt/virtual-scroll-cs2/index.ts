


import { Gantt, Selection, VirtualScroll,Edit,Toolbar} from '@syncfusion/ej2-gantt';
import { virtualData } from 'datasource.ts';

Gantt.Inject(Selection, VirtualScroll,Edit);

let gantt: Gantt = new Gantt({
    dataSource: virtualData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
               toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'NextTimeSpan', 'PrevTimeSpan', 'Search', 'Update', 'Indent', 'Outdent']
    enableVirtualization: true,
   autoCalculateDateScheduling:false,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
});
gantt.appendTo('#Gantt');



