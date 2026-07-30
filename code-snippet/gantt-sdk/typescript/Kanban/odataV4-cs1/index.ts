

import { Kanban } from '@syncfusion/ej2-kanban';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
    adaptor: new ODataV4Adaptor
});
let kanbanObj: Kanban = new Kanban({
    dataSource: data,
    keyField: 'ContactTitle',
    columns: [
        { headerText: 'Order Administrator', keyField: 'Order Administrator' },
        { headerText: 'Sales Representative', keyField: 'Sales Representative' },
        { headerText: 'Export Administrator', keyField: 'Export Administrator' }
    ],
    cardSettings: {
        contentField: 'ContactName',
        headerField: 'SupplierID'
    },
    allowDragAndDrop: false,
    dialogOpen: dialogOpen
});
kanbanObj.appendTo('#Kanban');
function dialogOpen(args: DialogEventArgs): void {
    args.cancel = true;
}


