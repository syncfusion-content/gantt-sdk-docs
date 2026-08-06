import { GanttData } from './datasource.ts';
import { Gantt, Edit, Selection} from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        expandState: 'isExpand'
    },
    enableMultiTaskbar: true
});
gantt.appendTo('#Gantt');