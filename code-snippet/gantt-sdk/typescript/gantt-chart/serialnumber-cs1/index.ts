import { Gantt, Sort, Filter, Resize, ColumnMenu, Toolbar, Edit, RowDD, ContextMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Sort, Filter, Resize, ColumnMenu, Toolbar, Edit, RowDD, ContextMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    allowResizing: true,
    enableContextMenu: true,
    showColumnMenu: true,
    enableSerialNumber: true,
    allowRowDragAndDrop: true,
    allowTaskbarDragAndDrop: true,
    treeColumnIndex: 2,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 4
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'SerialNumber', headerText: 'S.No', width: '100px', allowFiltering: false },
        { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280px' },
        { field: 'StartDate', headerText: 'Start Date', width: '140px' },
        { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
        { field: 'Progress', headerText: 'Progress' }
    ],
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'],
});

gantt.appendTo('#Gantt');