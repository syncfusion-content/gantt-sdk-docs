import { Gantt, Edit, ActionBeginArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
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
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150', allowEditing: false }
    ],
    actionBegin: (args: ActionBeginArgs) => {
        if (args.requestType === 'taskbarediting' && (args as any).taskBarEditAction === 'ProgressResizing') {
            args.cancel = true;
        }
    }
});

gantt.appendTo('#Gantt');