var data = new ej.data.DataManager({
    url: 'http://some.com/invalidUrl'
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
    actionFailure: function (e) {
        var span = document.createElement('span');
        kanbanObj.element.parentNode.insertBefore(span, kanbanObj.element);
        span.style.color = '#FF0000';
        span.innerHTML = 'Server exception: 404 Not found';
    }
});
kanbanObj.appendTo('#Kanban');


