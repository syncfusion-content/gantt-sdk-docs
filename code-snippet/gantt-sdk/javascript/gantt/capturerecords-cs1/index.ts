import { Gantt, Edit, Toolbar} from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Toolbar);

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
        child: 'subtasks'
    },
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        aloowAdding: true,
        allowDeleting: true,
        showDeleteConfirmDialog: true,
        mode: 'Auto'
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search',
            'PrevTimeSpan', 'NextTimeSpan'],

    actionComplete(args: any) {
        if (args.requestType == 'add') {
            console.log("Added new record values available in the 'args' variable as 'newTaskData'", args);
        }
        if (args.requestType == 'save') {
            console.log("Edited record values available in the 'args' variable as 'modifiedTaskData'", args);
        }
        if (args.requestType == 'delete') {
            console.log("Modified Records after Delete action", args);
        }
    },
});

gantt.appendTo('#Gantt');