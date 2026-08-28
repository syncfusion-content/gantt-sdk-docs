import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
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
            ]
        },
        taskCalendars: [
            {
                calendarId: 'day-shift',
                workingTime: [
                    { from: 9, to: 17 }
                ],
                holidays: [],
                exceptions: [
                    { from: new Date('04/09/2026'), to: new Date('04/09/2026'), name: 'Team Meeting Day', isWorking: true, workingTime: [{ from: 10, to: 16 }] }
                ]
            },
            {
                calendarId: 'night-shift',
                workingTime: [
                    { from: 17, to: 9 }
                ],
                holidays: [],
                exceptions: [
                    { from: new Date('04/10/2026'), to: new Date('04/10/2026'), name: 'Maintenance Window', isWorking: true, workingTime: [{ from: 18, to: 8 }] }
                ]
            }
        ]
    }
});

gantt.appendTo('#Gantt');