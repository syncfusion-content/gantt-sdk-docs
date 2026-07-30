import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

gantt.appendTo('#Gantt');