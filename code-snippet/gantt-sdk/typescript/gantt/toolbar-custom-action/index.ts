import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,        
    },
    toolbarClick: toolbarClick,
});
gantt.appendTo('#Gantt');

function toolbarClick (args: ClickEventArgs) {
    if (args.item.id === 'Gantt_add') {
        args.cancel = true;
        const newRecord = {
            TaskID: Math.floor(Math.random() * 100000),
            TaskName: 'New Task',
            StartDate: new Date(),
            EndDate: new Date(),
            Duration: 1,
            Progress: 0
        };
        gantt.addRecord(newRecord);
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = 'The default add action was cancelled. A new task was added using `addRecord()`.';
        }
    }
}