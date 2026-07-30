


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
        viewStartDate: new Date('04/03/2019'),
        viewEndDate: new Date('04/07/2019'),
    },
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/13/2019')
});
gantt.appendTo('#Gantt');