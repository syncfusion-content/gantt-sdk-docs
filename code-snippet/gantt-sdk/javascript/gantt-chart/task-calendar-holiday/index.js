
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/01/2026'),
    projectEndDate: new Date('04/30/2026'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        calendarId: 'CalendarId'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    calendarSettings: {
        projectCalendar: {
            workingTime: [
                { from: 9, to: 17 }
            ],
            holidays: [
                { from: new Date('04/10/2026'), to: new Date('04/10/2026'), label: 'Regional Holiday' }
            ],
            exceptions: [
                { from: new Date('04/17/2026'), to: new Date('04/17/2026'), label: 'Project extended hours', exceptionWorkingTime: [{ from: 8, to: 18 }] }
            ]
        },
        taskCalendars: [
            {
                calendarId: 'local-team',
                holidays: [
                    { from: new Date('04/06/2026'), to: new Date('04/06/2026'), label: 'Local Holiday' }
                ]
            },
            {
                calendarId: 'offshore-team',
                holidays: [
                    { from: new Date('04/08/2026'), to: new Date('04/08/2026'), label: 'Offshore Holiday' }
                ]
            }
        ]
    }
});

ganttChart.appendTo('#Gantt');