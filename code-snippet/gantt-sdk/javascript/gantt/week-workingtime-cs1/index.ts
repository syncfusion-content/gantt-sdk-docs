import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(DayMarkers);

let gantt: Gantt = new Gantt({
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
gantt.appendTo('#Gantt');