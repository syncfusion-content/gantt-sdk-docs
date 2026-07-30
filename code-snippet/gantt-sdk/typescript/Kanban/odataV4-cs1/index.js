var data = new ej.data.DataManager({
    url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
    adaptor: new ej.data.ODataV4Adaptor
});
var kanbanObj = new ej.kanban.Kanban({
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
function dialogOpen(args) {
    args.cancel = true;
}


