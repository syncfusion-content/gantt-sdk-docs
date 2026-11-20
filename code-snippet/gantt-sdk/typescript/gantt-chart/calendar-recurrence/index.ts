import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    projectStartDate: new Date('04/01/2026'),
    projectEndDate: new Date('06/30/2026'),
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
        projectCalendar: { workingTime: [{ from: 8, to: 17 }] },
        taskCalendars: [
            {
                calendarId: 'regional',
                workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                workingTime: [{ from: 9, to: 12 }, { from: 13, to: 17 }],
                holidays: [{
                    from: new Date('04/10/2026'),
                    to: new Date('04/10/2026'),
                    label: 'Regional closure',
                    recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 10, count: 3 }
                }],
                exceptions: [{
                    from: new Date('04/17/2026'),
                    to: new Date('04/17/2026'),
                    label: 'Partial working day',
                    exceptionWorkingTime: [{ from: 9, to: 12 }],
                    recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 17, count: 3 }
                }]
            }
        ]
    }
});

gantt.appendTo('#Gantt');