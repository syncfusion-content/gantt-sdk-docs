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
        parentID: 'ParentId'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    calendarSettings: {
        projectCalendar: {
            holidays: [
                { from: new Date('04/10/2026'), to: new Date('04/10/2026'), label: 'Holiday 1' },
                { from: new Date('04/17/2026'), to: new Date('04/17/2026'), label: 'Holiday 2' }
            ]
        }
    }
});

gantt.appendTo('#Gantt');