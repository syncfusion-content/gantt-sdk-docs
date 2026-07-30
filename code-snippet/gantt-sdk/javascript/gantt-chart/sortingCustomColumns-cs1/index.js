ej.gantt.Gantt.Inject(ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 200 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 100 },
        { field: 'Progress', headerText: 'Progress', width: 100 },
        { field: 'CustomColumn', headerText: 'Custom Column', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');

var sortBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
sortBtn.appendTo('#sortCustom');

document.getElementById('sortCustom').addEventListener('click', function () {
    ganttChart.sortModule.sortColumn('CustomColumn', 'Ascending', false);
});