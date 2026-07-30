

import { Kanban } from '@syncfusion/ej2-kanban';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class TaskIdAdaptor extends ODataAdaptor {
    processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        // adding Task Id
        original.forEach((item: { [key: string]: Object }) => item['Id'] = 'Task - ' + ++i);
        return original;
    }
}
let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Kanban',
    adaptor: new TaskIdAdaptor
});
let kanbanObj: Kanban = new Kanban({
    dataSource: data,
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



