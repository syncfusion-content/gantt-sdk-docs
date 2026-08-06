var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

var splitterSettings = {
    columnIndex: 3
};

var filterSettings = {
    columns: [
        { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
        { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }
    ]
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    filterSettings: filterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');
