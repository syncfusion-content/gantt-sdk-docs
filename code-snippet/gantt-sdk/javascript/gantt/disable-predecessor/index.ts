import { Gantt, Edit, ActionBeginArgs} from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
Gantt.Inject(Edit);

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
    },
    enablePredecessorValidation:false
});

gantt.appendTo('#Gantt');