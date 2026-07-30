var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Kanban',
    adaptor: new ej.data.ODataAdaptor
});
var kanbanObj = new ej.kanban.Kanban({
    dataSource: data,
    query: new ej.data.Query().addParams('ej2kanban', 'true'),
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
function dialogOpen(args) {
    args.cancel = true;
}


