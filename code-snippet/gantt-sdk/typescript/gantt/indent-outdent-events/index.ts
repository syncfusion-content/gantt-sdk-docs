import { Gantt, Toolbar, Selection, Edit, Filter, ActionCompleteArgs } from '@syncfusion/ej2-gantt';
import { ganttData, GanttTask } from './datasource.ts';

Gantt.Inject(Toolbar, Selection, Edit, Filter);

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Indent', 'Outdent'],
    editSettings: {
        allowEditing: true
    },
    splitterSettings: {
      position: '75%'
    },    
    actionComplete: (args: ActionCompleteArgs) => {
        const taskData = args.data as GanttTask[];
        const messageEl = document.getElementById('message') as HTMLElement
        if (args.requestType === 'outdented') {
            const id = (taskData[0] as unknown as GanttTask).TaskID;
        if (messageEl) messageEl.textContent = `Task ID ${id} has been outdented`;
        } else if (args.requestType === 'indented') {
            const id = (taskData[0] as unknown as GanttTask).TaskID;
        if (messageEl) messageEl.textContent = `Task ID ${id} has been indented`;
        }
    }
});
gantt.appendTo('#Gantt');