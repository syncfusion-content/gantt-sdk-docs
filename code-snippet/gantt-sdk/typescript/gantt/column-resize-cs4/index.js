ej.gantt.Gantt.Inject(ej.gantt.Resize);
var messageRef = document.getElementById('message');

function updateMessage(text) {
    messageRef.textContent = text;
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: { position: '90%' },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ],
    resizeStart: function (args) {
        updateMessage('resizeStart event triggered');
        if (args.column.field === 'TaskID') {
            args.cancel = true;
            updateMessage('resizeStart event triggered and cancelled for TaskID');
        }
    },
    resizing: function () {
        updateMessage('resizing event triggered');
    },
    resizeStop: function (args) {
        updateMessage('resizeStop event triggered');

        var headerCell = ganttChart.treeGrid.grid.getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');

        var cells = ganttChart.treeGrid.grid
            .getContentTable()
            .querySelectorAll('[aria-colindex="' + (args.column.index + 1) + '"]');

        cells.forEach(function (cell) {
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        });
    }
});

ganttChart.appendTo('#Gantt');