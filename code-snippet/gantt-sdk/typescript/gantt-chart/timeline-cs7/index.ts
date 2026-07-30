import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

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
    timelineSettings: {
        updateTimescaleView: false
    },
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');