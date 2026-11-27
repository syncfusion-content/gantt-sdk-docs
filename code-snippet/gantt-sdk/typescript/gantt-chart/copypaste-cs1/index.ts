import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection);

const gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowTaskCopyPaste: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 200 },
        { field: 'StartDate', headerText: 'Start Date', width: 130 },
        { field: 'Duration', headerText: 'Duration', width: 110 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    editSettings: {
        allowAdding: true
    }
});

gantt.appendTo('#Gantt');
