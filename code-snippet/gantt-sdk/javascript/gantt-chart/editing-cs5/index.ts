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
    editSettings: {
        allowTaskbarEditing: true
    },
    taskbarEditing: (args: any) => {
        if (args.data.TaskID == 4) {
            args.cancel = true; // We can't edit Task Id 4.
        }
    },
    queryTaskbarInfo: (args: any) => {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit'; // Taskbar editing indicators are disabled.
        }
    }
});

gantt.appendTo('#Gantt');