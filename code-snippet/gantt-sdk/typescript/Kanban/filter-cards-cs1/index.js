var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        showHeader: false,
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');
var priorityObj = new ej.dropdowns.DropDownList({
    dataSource: ['None', 'High', 'Normal', 'Low'],
    index: 0,
    placeholder: 'Select a priority',
    width: 100,
    change: change
});
priorityObj.appendTo('#filter');

function change(args) {
    var filterQuery = new ej.data.Query();
    if (args.value !== 'None') {
        filterQuery = new ej.data.Query().where('Priority', 'equal', args.value);
    }
    kanbanObj.query = filterQuery;
}

