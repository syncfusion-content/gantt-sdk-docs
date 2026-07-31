var eventMarkersEnabled = true;

var defaultMarkers = [
    { day: new Date('04/09/2019'), label: 'Research phase' },
    { day: new Date('04/30/2019'), label: 'Design phase' },
    { day: new Date('05/23/2019'), label: 'Production phase' },
    { day: new Date('06/20/2019'), label: 'Sales and marketing phase' }
];

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
    eventMarkers: defaultMarkers,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});
ganttChart.appendTo('#Gantt');

var eventBtn = new ej.buttons.Button({ content: 'Event Markers' });
eventBtn.appendTo('#eventMarkers');

document.getElementById('eventMarkers').addEventListener('click', function () {
    ganttChart.eventMarkers = eventMarkersEnabled ? [] : defaultMarkers.slice();
    ganttChart.refresh();
    eventMarkersEnabled = !eventMarkersEnabled;
});