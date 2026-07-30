var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});
gantt.appendTo('#Gantt');

var showBtn = new ej.buttons.Button();
showBtn.appendTo('#show');

var hideBtn = new ej.buttons.Button();
hideBtn.appendTo('#hide');

document.getElementById('show').addEventListener('click', function () {
    var allColumns = gantt.getGanttColumns();
    if (allColumns.length > 2) {
        gantt.showColumn(allColumns[2].headerText, 'headerText');
    }
});

document.getElementById('hide').addEventListener('click', function () {
    var visibleColumns = gantt.treeGrid.getVisibleColumns();
    if (visibleColumns.length > 2) {
        gantt.hideColumn(visibleColumns[2].headerText, 'headerText');
    }
});