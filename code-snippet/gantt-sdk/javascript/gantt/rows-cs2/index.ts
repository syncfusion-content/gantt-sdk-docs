import { Gantt, Edit, Toolbar, ActionBeginArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '430px',
    toolbar: ['Add'],
    editSettings: {
        allowAdding: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    actionBegin: (args: ActionBeginArgs) => {
        if (args.requestType === 'beforeOpenAddDialog') {
            (args.rowData as any).TaskName = 'Gantt';
            (args.rowData as any).Progress = 70;

            if ((args.rowData as any).ganttProperties) {
                (args.rowData as any).ganttProperties.taskName = 'Gantt';
                (args.rowData as any).ganttProperties.progress = 70;
            }
        }
    }
});

gantt.appendTo('#Gantt');