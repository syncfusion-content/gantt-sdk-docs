import { Gantt, QueryTaskbarInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        notes: 'Info'
    },
    queryTaskbarInfo: (args: QueryTaskbarInfoEventArgs) => {
        let task: any = args.data;
        if (task.TaskID >= 7 && task.TaskID <= 10) {
            (args.taskbarElement as HTMLElement).style.visibility = 'hidden';
        }
    },
    queryCellInfo: (args: QueryCellInfoEventArgs) => {
        let task: any = args.data;
        if (args.column.field === 'Info' && (!task.Info || task.Info.trim() === '')) {
            let notesIcon = (args.cell as HTMLElement).querySelector('.e-notes-info') as HTMLElement;
            if (notesIcon) {
                notesIcon.style.visibility = 'hidden';
            }
        }
    },
    columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
        { field: 'Info', headerText: 'Notes' }
    ]
});

gantt.appendTo('#Gantt');