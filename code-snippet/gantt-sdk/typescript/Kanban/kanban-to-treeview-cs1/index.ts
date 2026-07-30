

import { Kanban, KanbanModel, DragEventArgs } from '@syncfusion/ej2-kanban';
import { kanbanData, treeViewData } from './datasource.ts';
import { closest } from '@syncfusion/ej2-base';
import { TreeView, DragAndDropEventArgs } from '@syncfusion/ej2-navigations';

const kanbanOptions: KanbanModel = {
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    externalDropId: ['#TreeView'],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    showEmptyColumn: true,
    dragStop: (args: DragEventArgs): void => {
        if (closest(args.event.target as Element, '#TreeView')) {
            kanbanObj.deleteCard(args.data);
            treeObj.addNodes(args.data);
            args.cancel = true;
        }
    }
};

const kanbanObj: Kanban = new Kanban(kanbanOptions);
kanbanObj.appendTo('#Kanban');

let treeObj: TreeView = new TreeView({
    fields: { dataSource: treeViewData, id: 'Id', text: 'Status' },
    allowDragAndDrop: true,
    nodeDragStop: onTreeDragStop,
    nodeTemplate: '#treeTemplate'
});
treeObj.appendTo('#TreeView');

function onTreeDragStop(args: DragAndDropEventArgs): void {
    if (closest(args.event.target as Element, '#Kanban')) {
        let treeData: { [key: string]: Object }[] =
        treeObj.fields.dataSource as { [key: string]: Object }[];
        const filteredData: { [key: string]: Object }[] =
        treeData.filter((item: any) => item.Id === parseInt(args.draggedNodeData.id as string, 10));
        treeObj.removeNodes([args.draggedNodeData.id] as string[]);
        kanbanObj.openDialog('Add', filteredData[0]);
        args.cancel = true;
    }
}


