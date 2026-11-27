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
                calendarId: 'company',
                workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                workingTime: [{ from: 9, to: 12 }, { from: 13, to: 17 }],
                holidays: [{
                    from: new Date('04/10/2026'),
                    to: new Date('04/10/2026'),
                    label: 'Company closure'
                }],
                exceptions: [{
                    from: new Date('04/17/2026'),
                    to: new Date('04/17/2026'),
                    label: 'Company partial working day',
                    exceptionWorkingTime: [{ from: 9, to: 12 }]
                }]
            },
            {
                calendarId: 'regional',
                parentId: 'company'
            }
        ]
    }
});

gantt.appendTo('#Gantt');