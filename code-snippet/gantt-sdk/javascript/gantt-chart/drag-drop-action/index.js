ej.gantt.Gantt.Inject(ej.gantt.RowDD, ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90, isPrimaryKey: true },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    splitterSettings: {
        position: '75%'
    },
    rowDragStartHelper: rowDragStartHelper,
    rowDragStart: rowDragStart,
    rowDrag: rowDrag,
    rowDrop: rowDrop,
});
ganttChart.appendTo('#Gantt');

function rowDragStartHelper(args) {
    const text= document.getElementById('message');
    text.textContent = 'rowDragStartHelper event triggered';
    const draggedTask = (args.data)[0];
    if (draggedTask.TaskID === 2) {
        args.cancel = true;
        text.textContent = 'Drag cancelled for TaskID 2';
    }
}

function rowDragStart (args) {
    const text= document.getElementById('message');
    text.textContent='rowDragStart event triggered';
    const draggedTask = (args.data)[0];
    if (draggedTask.Progress < 50) {
        args.rows.forEach((row) => {
            row.style.background = '#ec9ec8ff';
        });
    }
}

function rowDrag(args)  {
    const text= document.getElementById('message');
    text.textContent='rowDrag event triggered';
    const draggedTask = (args.data)[0];
    if (draggedTask.Progress > 50) {
        args.rows.forEach((row) => {
            row.style.background = '#c5f4fdde';
        });
    }
}

function rowDrop(args)  {
    const text= document.getElementById('message');
    text.textContent='rowDrop event triggered';
    const draggedTask = (args.data)[0];
    if (draggedTask.TaskID === 4) {
        args.cancel = true;
        text.textContent ='Drop cancelled for TaskID 4'
    }
}