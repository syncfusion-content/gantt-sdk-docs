ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: virtualData,
    treeColumnIndex: 1,
    height: '450px',
    allowSelection: true,
    highlightWeekends: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    enableVirtualization: true,
    enableTimelineVirtualization: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ],
    labelSettings: {
        taskLabel: 'Progress'
    },
    gridLines: 'Both',
    splitterSettings: {
        columnIndex: 2
    },
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('12/31/2025')
});
ganttChart.appendTo('#Gantt');