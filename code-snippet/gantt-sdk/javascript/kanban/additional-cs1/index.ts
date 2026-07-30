

import { Kanban, DialogEventArgs } from '@syncfusion/ej2-kanban';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Kanban',
    adaptor: new ODataAdaptor
});
let kanbanObj: Kanban = new Kanban({
    dataSource: data,
    query: new Query().addParams('ej2kanban', 'true'),
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    allowDragAndDrop: false,
    dialogOpen: dialogOpen
});
kanbanObj.appendTo('#Kanban');

function dialogOpen(args: DialogEventArgs): void {
    args.cancel = true;
}



