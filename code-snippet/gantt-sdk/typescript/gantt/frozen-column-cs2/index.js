var taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate',
    dependency: 'Predecessor',
    progress: 'Progress',
    parentID: 'ParentID',
};

var splitterSettings = {
    position: '65%'
};

var labelSettings = {
    taskLabel: 'Progress'
};

var ganttChart = new ej.gantt.Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: taskSettings,
    treeColumnIndex: 1,
    splitterSettings: splitterSettings,
    gridLines: 'Both',
    labelSettings: labelSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', isFrozen: true },
        { field: 'TaskName', headerText: 'Task Name', width: 220, isFrozen: true },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'Status', headerText: 'Status', isFrozen: true }
    ],
});

ganttChart.appendTo('#Gantt');