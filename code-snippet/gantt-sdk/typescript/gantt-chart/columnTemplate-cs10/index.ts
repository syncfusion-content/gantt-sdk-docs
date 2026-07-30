import { Gantt, Edit, Selection, Toolbar, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 250,
            template: '#taskNameTemplate'
        },
        {
            field: 'StartDate',
            headerText: 'Start Date',
            width: 150,
            textAlign: 'Right',
            format: 'yMd',
            type: 'date'
        }
    ],
    queryCellInfo: queryCellInfo
});

gantt.appendTo('#Gantt');

function queryCellInfo(args: QueryCellInfoEventArgs): void {
    if (args.column.field === 'TaskName') {
        const value: string = (args.data as any).TaskName;
        const buttonElement: HTMLButtonElement = document.createElement('button');
        buttonElement.classList.add('e-btn');
        args.cell.appendChild(buttonElement);

        const btn: Button = new Button({ content: value });
        btn.appendTo(buttonElement);
    }
}