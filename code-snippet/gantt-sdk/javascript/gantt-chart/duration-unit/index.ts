import { Gantt, } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

const gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    splitterSettings: {columnIndex:4},
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit:'DurationUnit',
        parentID: 'ParentID',
    },
});

gantt.appendTo('#Gantt');
