import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { ganttData } from './datasource.ts';

Gantt.Inject(DayMarkers)

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    workWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    highlightWeekends: true
});

gantt.appendTo('#Gantt');