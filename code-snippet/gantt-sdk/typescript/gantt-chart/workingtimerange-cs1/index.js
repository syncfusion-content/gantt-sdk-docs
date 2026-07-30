ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    highlightWeekends: true,
    dayWorkingTime: [{ from: 9, to: 18 }],
    timelineSettings: {
        timelineViewMode: 'Day'
    },
    splitterSettings: {
        columnIndex: 0
    }
});
ganttChart.appendTo('#Gantt');