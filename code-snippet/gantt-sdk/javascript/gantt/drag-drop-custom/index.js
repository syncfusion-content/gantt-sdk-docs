ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD, ej.treegrid.Edit, ej.treegrid.Selection);

ej.gantt.Gantt.Inject(ej.gantt.RowDD, ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    selectionSettings: {
        type: 'Multiple'
    },
    editSettings: {
        allowDeleting: true
    },
    splitterSettings: {
        position: '75%'
    },
    load: () => {
        // Enable dropping rows from Gantt into the TreeGrid by targeting its ID.
        ganttChart.treeGrid.rowDropSettings = { targetID: 'TreeGrid' };
    },
    rowDrop: (args) => {
        const targetGrid = (args.target).closest('.e-grid');
        if (targetGrid) {
            args.cancel = true;
            const targetRow = (args.target).closest('.e-row');
            const rowIndex = (targetRow) ? targetRow.rowIndex : 0;
            const draggedData = args.data;
            draggedData.forEach((item) => {
                treeGrid.addRecord(item, rowIndex);
                ganttChart.deleteRecord(item);
            });
        }
    }
});
ganttChart.appendTo('#Gantt');

var treeGrid = new ej.treegrid.TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', textAlign: 'Left', width: 180 },
        { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', type: 'date', format: 'yMd', width: 120 },
        { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 120 }
    ],
    editSettings: { allowAdding: true, allowEditing: true },
    selectionSettings: { type: 'Multiple' }
});
treeGrid.appendTo('#TreeGrid');