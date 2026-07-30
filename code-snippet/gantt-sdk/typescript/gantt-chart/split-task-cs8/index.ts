import { Gantt, Edit, Toolbar, Selection, ContextMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Toolbar, Selection, ContextMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    enableContextMenu: true,

    onTaskbarClick: (args: any): void => {
        const element = args.taskbarElement as HTMLElement;
        const indexAttr = element.getAttribute('data-segment-index');

        let message: string = '';

        if (indexAttr === null || indexAttr === undefined) {
            message = 'Task clicked (not a segment)';
            document.getElementById('message')!.innerText = message;
            return;
        }

        const index = Number(indexAttr);
        const segments = args.data.ganttProperties.segments;
        const segment = segments[index];

        message = `Segment ${segment.segmentIndex} clicked`;
        document.getElementById('message')!.innerText = message;
    }
});

gantt.appendTo('#Gantt');