import { Gantt, Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    enableUndoRedo: true,
    showColumnMenu: true,
    allowResizing: true,
    allowReordering: true,
    allowRowDragAndDrop: true,
    undoRedoActions: ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
    'PreviousTimeSpan', 'NextTimeSpan','ColumnState'],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
    'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    }
});
gantt.appendTo('#Gantt');

let clearundocollection: Button = new Button();
clearundocollection.appendTo('#clearundocollection');

document.getElementById('clearundocollection').addEventListener('click', () => {
    gantt.clearUndoCollection()
});

let clearredocollection: Button = new Button();
clearredocollection.appendTo('#clearredocollection');

document.getElementById('clearredocollection').addEventListener('click', () => {
    gantt.clearRedoCollection()
});