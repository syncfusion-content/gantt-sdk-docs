class TaskIdAdaptor extends ej.data.ODataAdaptor {
    processResponse() {
        var i = 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding Task Id
        original.forEach(function(item) { item['TaskId'] = 'Task - ' + ++i});
        return original;
    }
}
var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Kanban',
    adaptor: new ej.data.ODataAdaptor
});
var kanbanObj = new ej.kanban.Kanban({
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
function dialogOpen(args) {
    args.cancel = true;
}


