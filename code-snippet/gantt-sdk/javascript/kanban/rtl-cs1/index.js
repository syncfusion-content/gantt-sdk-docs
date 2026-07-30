ej.base.L10n.load({
    'ar': {
        'kanban': {
            'items': 'العناصر',
            'min': 'أنا',
            'max': 'ماكس'
        }
    }
});
var kanbanOptions = {
    dataSource: kanbanData,
    keyField: 'Status',
    enableRtl: true,
    locale: 'ar',
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

