var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
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
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');

var addBtn = new ej.buttons.Button({ cssClass: 'e-info' });
addBtn.appendTo('#add');

var deleteBtn = new ej.buttons.Button({ cssClass: 'e-info' });
deleteBtn.appendTo('#delete');

document.getElementById('add').addEventListener('click', function () {
    var newColumns = [
        { field: 'TaskID', headerText: 'TaskID', width: 120 },
        { field: 'StartDate', headerText: 'StartDate', width: 120, format: 'yMd' }
    ];
    newColumns.forEach(function (col) {
        ganttChart.treeGrid.grid.columns.push(col);
    });
    ganttChart.treeGrid.grid.refreshColumns();
});

document.getElementById('delete').addEventListener('click', function () {
    ganttChart.treeGrid.grid.columns.pop();
    ganttChart.treeGrid.grid.refreshColumns();
});