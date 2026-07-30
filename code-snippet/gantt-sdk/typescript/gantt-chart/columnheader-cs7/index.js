var headerTextMap = {
    TaskID: 'ID',
    TaskName: 'Name',
    StartDate: 'Start Date',
    Duration: 'Task Duration',
    Progress: 'Task Progress'
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
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

var changeBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
changeBtn.appendTo('#changeHeader');

document.getElementById('changeHeader').addEventListener('click', function () {
    ganttChart.treeGrid.grid.columns.forEach(function (column) {
        if (headerTextMap[column.field]) {
            column.headerText = headerTextMap[column.field];
        }
    });
    ganttChart.treeGrid.grid.refreshHeader();
});