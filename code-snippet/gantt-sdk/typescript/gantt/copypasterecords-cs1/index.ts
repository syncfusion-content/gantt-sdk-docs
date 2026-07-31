import { Gantt, Edit, Selection, ContextMenu, ContextMenuClickEventArgs, ContextMenuOpenEventArgs } from '@syncfusion/ej2-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection, ContextMenu);

let copiedRecord: any;

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
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
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    contextMenuItems: [
        { text: 'Copy', target: '.e-content', id: 'copy' } as ContextMenuItemModel,
        { text: 'Paste', target: '.e-content', id: 'paste' } as ContextMenuItemModel
    ],
    contextMenuClick: contextMenuClick,
    contextMenuOpen: contextMenuOpen
});

gantt.appendTo('#Gantt');

function contextMenuClick(args: ContextMenuClickEventArgs): void {
    if (args.item.id === 'copy') {
        copiedRecord = args.rowData;
        copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1;
    }

    if (args.item.id === 'paste') {
        gantt.addRecord(copiedRecord.taskData, 'Below', args.rowData!.index);
        if (copiedRecord.hasChildRecords) {
            addChildRecords(copiedRecord, args.rowData!.index! + 1);
        }
        copiedRecord = undefined;
    }
}

function contextMenuOpen(args: ContextMenuOpenEventArgs): void {
    if (args.type !== 'Header') {
        if (copiedRecord) {
            args.hideItems!.push('Copy');
        } else {
            args.hideItems!.push('Paste');
        }
    }
}

function addChildRecords(record: any, index: number): void {
    for (let i = 0; i < record.childRecords.length; i++) {
        let childRecord = record.childRecords[i];
        childRecord.taskData.TaskID = gantt.currentViewData.length + 1;
        gantt.addRecord(childRecord.taskData, 'Child', index);
        if (childRecord.hasChildRecords) {
            addChildRecords(childRecord, index + (i + 1));
        }
    }
}