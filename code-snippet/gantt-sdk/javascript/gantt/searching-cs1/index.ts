import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
Gantt.Inject(Filter, Toolbar);

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
    splitterSettings: {
        columnIndex: 3
    },
    toolbar: ['Search']
});
gantt.appendTo('#Gantt');