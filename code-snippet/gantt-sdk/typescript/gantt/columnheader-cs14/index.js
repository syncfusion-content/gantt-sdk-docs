var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');

var button = new ej.buttons.Button({
    cssClass: 'e-outline'
});
button.appendTo('#button');

document.getElementById('button').addEventListener('click', function () {
    var column = ganttChart.treeGrid.grid.getColumnByIndex(1);
    if (column) {
        column.headerText = 'New Header Text';
        ganttChart.treeGrid.grid.refreshHeader();
    }
});