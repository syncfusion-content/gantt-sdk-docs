var taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    dependency: 'Predecessor',
    progress: 'Progress',
    parentID: 'ParentID'
};

var labelSettings = {
    taskLabel: 'Progress'
};

var splitterSettings = {
    position: '65%'
};

var gridLines = 'Both';

var gantt = new ej.gantt.Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: taskSettings,
    labelSettings: labelSettings,
    frozenColumns: 2,
    treeColumnIndex: 1,
    splitterSettings: splitterSettings,
    gridLines: gridLines,
    allowSelection: false,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'EndDate', headerText: 'End Date', textAlign: 'Right', width: 120, format: 'yMd' },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Left', width: 120 },
        { field: 'Predecessor', headerText: 'Predecessor', textAlign: 'Left', width: 120 }
    ]
});

gantt.appendTo('#Gantt');