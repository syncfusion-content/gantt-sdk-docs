ej.base.L10n.load({
    'de': {
        'kanban': {
            'items': 'Artikel',
            'min': 'Min',
            'max': 'Max'
        }
    }
});
var kanbanOptions = {
    dataSource: kanbanData,
    keyField: 'Status',
    locale: 'de',
    columns: [
        { headerText: 'Backlog', keyField: 'Open', showItemCount: true, minCount: 6 },
        { headerText: 'In Progress', keyField: 'InProgress', showItemCount: true, maxCount: 5 },
        { headerText: 'Done', keyField: 'Close', showItemCount: true }
    ],
    swimlaneSettings: {
        keyField: 'Assignee'
    },
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
};
var kanbanObj = new ej.kanban.Kanban(kanbanOptions);
kanbanObj.appendTo('#Kanban');

