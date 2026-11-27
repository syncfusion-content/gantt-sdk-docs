var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/06/2026'),
    projectEndDate: new Date('04/24/2026'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        calendarId: 'CalendarId'
    },
    calendarSettings: {
        projectCalendar: {
            workingTime: [{ from: 9, to: 17 }]
        },
        taskCalendars: [{
            calendarId: 'day-shift',
            workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            workingTime: [{ from: 9, to: 17 }],
            weekWorkingTime: [
                { dayOfWeek: 'Monday', timeRange: [{ from: 9, to: 12 }, { from: 13, to: 17 }] },
                { dayOfWeek: 'Friday', timeRange: [{ from: 9, to: 13 }] }
            ]
        }]
    }
});

ganttChart.appendTo('#Gantt');
