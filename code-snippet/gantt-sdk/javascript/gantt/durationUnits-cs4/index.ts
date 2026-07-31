import { Gantt } from '@syncfusion/ej2-gantt';
import { ganttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
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
        columnIndex: 4
    }
});

gantt.appendTo('#Gantt');