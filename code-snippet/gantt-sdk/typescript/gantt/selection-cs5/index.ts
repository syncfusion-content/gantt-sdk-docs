import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    selectedRowIndex: 5,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 250 },
        { field: 'StartDate', width: 150, format: 'yMd' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');