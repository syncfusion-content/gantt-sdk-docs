ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    highlightWeekends: true,
    weekWorkingTime: [{ dayOfWeek: 'Monday', timeRange: [{ from: 10, to: 18 }] },
    		     { dayOfWeek: 'Tuesday', timeRange: [{ from: 10, to: 18 }] }],
    timelineSettings: {
        timelineViewMode: 'Day'
    },
    splitterSettings: {
        columnIndex: 0
    }
});
ganttChart.appendTo('#Gantt');