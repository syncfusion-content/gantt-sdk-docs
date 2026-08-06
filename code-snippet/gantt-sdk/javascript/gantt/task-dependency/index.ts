import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});
gantt.appendTo('#Gantt');