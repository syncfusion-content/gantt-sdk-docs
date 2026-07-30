var ganttChart = new ej.gantt.Gantt({
    dataSource: virtualData,
    height: '450px',
    enableVirtualization: true,
    projectStartDate: new Date('04/01/2024'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
        dependency: 'Predecessor'
    },
    splitterSettings: {
        columnIndex: 1
    }
});

ganttChart.appendTo('#Gantt');

var updateBtn = new ej.buttons.Button();
updateBtn.appendTo('#updateDataSource');

document.getElementById('updateDataSource').addEventListener('click', function () {
    var otherinfo = {
        projectStartDate: new Date('01/01/2024'),
        projectEndDate: new Date('01/01/2025')
    };
    ganttChart.updateDataSource(updateData, otherinfo);
});