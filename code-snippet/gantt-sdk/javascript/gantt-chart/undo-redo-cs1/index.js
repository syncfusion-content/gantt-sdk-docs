ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.Filter,ej.gantt.Sort,ej.gantt.RowDD,ej.gantt.ColumnMenu,ej.gantt.Reorder,ej.gantt.Resize,ej.gantt.UndoRedo);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    enableUndoRedo: true,
    showColumnMenu: true,
    allowResizing: true,
    allowReordering: true,
    allowRowDragAndDrop: true,
    undoRedoActions: ['Edit', 'Delete'],
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
ganttChart.appendTo('#Gantt');