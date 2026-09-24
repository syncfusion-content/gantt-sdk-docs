
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('04/30/2019'),
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
                { from: new Date('04/10/2019'), to: new Date('04/10/2019'), label: 'Regional Holiday' }
            ]
        },
        taskCalendars: [
            {
                calendarId: 'local-team',
                holidays: [
                    { from: new Date('04/05/2019'), to: new Date('04/05/2019'), label: 'Local Holiday' }
                ]
            },
            {
                calendarId: 'offshore-team',
                holidays: [
                    { from: new Date('04/08/2019'), to: new Date('04/08/2019'), label: 'Offshore Holiday' }
                ]
            }
        ]
    }
});

ganttChart.appendTo('#Gantt');