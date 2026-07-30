ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);

var ganttChart = new ej.gantt.Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    eventMarkers: [
        { day: new Date('2019-04-20'), label: 'Research phase ends' },
        { day: new Date('2019-05-18'), label: 'Design phase ends' },
        { day: new Date('2019-06-05'), label: 'Production phase ends' },
        { day: new Date('2019-06-20'), label: 'Sales and marketing phase starts' }
    ],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});

ganttChart.appendTo('#Gantt');