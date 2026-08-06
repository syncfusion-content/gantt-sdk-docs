import { Gantt, Selection, ContextMenu, Edit, Sort, Resize, ContextMenuClickEventArgs, ContextMenuOpenEventArgs } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Selection, ContextMenu, Edit, Sort, Resize);

let gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: data,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    enableContextMenu: true,
    contextMenuItems: [
        'AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
    ],
    allowSorting: true,
    allowResizing: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    contextMenuClick: (args: ContextMenuClickEventArgs) => {
        let record: any = args.rowData;

        if (args.item.id === 'collapserow') {
            gantt.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            gantt.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            gantt.hideColumn(args.column!.headerText);
        }
    },
    contextMenuOpen: (args: ContextMenuOpenEventArgs) => {
        let record: any = args.rowData;

        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems!.push('Collapse the Row');
                args.hideItems!.push('Expand the Row');
            } else {
                if (record.expanded) {
                    args.hideItems!.push('Expand the Row');
                } else {
                    args.hideItems!.push('Collapse the Row');
                }
            }
        }
    }
});

gantt.appendTo('#Gantt');