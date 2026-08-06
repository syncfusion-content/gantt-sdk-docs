import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    timelineSettings: {
        topTier: {
            format: 'MMM',
            unit: 'Month'
        },
        bottomTier: {
            unit: 'Day',
            count: 2
        }
    }
});
gantt.appendTo('#Gantt');