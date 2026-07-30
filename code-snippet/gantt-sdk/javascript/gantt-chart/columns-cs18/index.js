var ganttChart = new ej.gantt.Gantt({
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
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});

ganttChart.appendTo('#Gantt');

var updateBtn = new ej.buttons.Button({ cssClass: 'e-info' });
updateBtn.appendTo('#updateColumns');

document.getElementById('updateColumns').addEventListener('click', function () {
    var columns = ganttChart.treeGrid.columns;
    if (columns && columns.length > 0) {
        columns[0].textAlign = 'Center';
        columns[0].width = 100;
        columns[2].visible = false;
        columns[1].customAttributes = { class: 'customcss' };
        ganttChart.treeGrid.refreshColumns();
    }
});