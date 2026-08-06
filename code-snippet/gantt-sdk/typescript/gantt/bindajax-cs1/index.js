var ganttChart = new ej.gantt.Gantt({
    dataSource: [],
    height: '430px',
    projectStartDate: new Date('02/24/2021'),
    projectEndDate: new Date('07/20/2021'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'SubTasks'
    },
    columns: [
        { field: 'TaskId', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbar: ['ExcelExport'],
    allowSelection: true
});

ganttChart.appendTo('#Gantt');

var bindBtn = new ej.buttons.Button();
bindBtn.appendTo('#bindData');

document.getElementById('bindData').addEventListener('click', function () {
    ganttChart.showSpinner();

    fetch('https://services.syncfusion.com/angular/production/api/GanttData')
        .then(res => res.json())
        .then(data => {
            ganttChart.hideSpinner();
            ganttChart.dataSource = data.Items;
            ganttChart.refresh();
        });
});