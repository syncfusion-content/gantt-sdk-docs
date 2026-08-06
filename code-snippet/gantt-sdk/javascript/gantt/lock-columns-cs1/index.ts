import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    allowReordering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 270,
            lockColumn: true,
            customAttributes: { class: 'customcss' }
        },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    splitterSettings: {
        position: '75%'
    }
});

gantt.appendTo('#Gantt');