


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts'

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
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        mode: 'Auto'
    }
});

gantt.appendTo('#Gantt');