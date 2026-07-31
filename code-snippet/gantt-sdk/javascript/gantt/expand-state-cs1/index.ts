import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        expandState: 'IsExpanded'
    },
    expandStateMapping: 'IsExpanded'
});

gantt.appendTo('#Gantt');