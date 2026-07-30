ej.gantt.Gantt.Inject(ej.gantt.Filter);

var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

var filter = {
    params: { showSpinButton: false }
};

var taskFilter = {
    params: { autofill: false }
};

var splitterSettings = {
    columnIndex: 2
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120, filter: filter },
        { field: 'TaskName', headerText: 'Task Name', width: 250, filter: taskFilter },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');
