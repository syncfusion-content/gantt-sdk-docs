import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: [
        { TaskId: 1, TaskName: 'Project planning', StartDate: new Date('04/06/2026'), Duration: 5, CalendarId: 'day-shift' },
        { TaskId: 2, TaskName: 'Requirements review', StartDate: new Date('04/06/2026'), Duration: 3, CalendarId: 'day-shift' },
        { TaskId: 3, TaskName: 'Design', StartDate: new Date('04/07/2026'), Duration: 4, CalendarId: 'day-shift' },
        { TaskId: 4, TaskName: 'Development', StartDate: new Date('04/11/2026'), Duration: 5, CalendarId: 'day-shift' },
        { TaskId: 5, TaskName: 'Testing', StartDate: new Date('04/16/2026'), Duration: 3, CalendarId: 'day-shift' }
    ],
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

gantt.appendTo('#Gantt');
