import { Gantt, Selection, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection);

let message: string = '';

function updateMessage(): void {
    let el: HTMLElement | null = document.getElementById('message');
    if (el) {
        el.innerHTML = message;
    }
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    enableHover: false,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    rowSelecting: (args: { data: any; cancel: boolean; }) => {
        let task: any = args.data;
        if (task.TaskID === 2) {
            args.cancel = true;
            message = 'Selection cancelled for TaskID 2';
            updateMessage();
        }
    },
    rowSelected: (args: { data: any; row: HTMLElement; }) => {
        let task: any = args.data;
        if (task.Progress && task.Progress > 40) {
            (args.row as HTMLElement).style.backgroundColor =
                'rgba(203, 246, 205, 1)';
        }
    },
    rowDeselected: (args: { data: any; row: HTMLElement; }) => {
        if (args.data && !Array.isArray(args.data)) {
            let task: any = args.data;
            if (task.Progress && task.Progress <= 40) {
                (args.row as HTMLElement).style.backgroundColor = '#e1838eff';
            }
        }
    },
    rowDeselecting: (args: { data: any; row: HTMLElement; }) => {
        if (args.data && !Array.isArray(args.data)) {
            let task: any = args.data;
            if (task.Progress && task.Progress > 80) {
                (args.row as HTMLElement).style.backgroundColor = '#f5f54bff';
            }
        }
    }
});

gantt.appendTo('#Gantt');