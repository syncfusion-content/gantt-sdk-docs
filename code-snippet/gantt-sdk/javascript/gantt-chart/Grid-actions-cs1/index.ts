import { Gantt, Resize, Reorder, Sort, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize, Reorder, Sort, Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowSorting: true,
    allowFiltering: true,
    allowReordering: true,
    allowResizing: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120, allowSorting: false },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270, allowFiltering: false },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 150, allowResizing: false },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 150, allowReordering: false },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 150 }
    ]
});

gantt.appendTo('#Gantt');