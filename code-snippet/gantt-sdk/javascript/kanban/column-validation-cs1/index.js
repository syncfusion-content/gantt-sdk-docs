var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open', showItemCount: true, minCount: 6 },
        { headerText: 'In Progress', keyField: 'InProgress', showItemCount: true, maxCount: 5 },
        { headerText: 'Testing', keyField: 'Testing', showItemCount: true, maxCount: 4, minCount: 3 },
        { headerText: 'Done', keyField: 'Close', showItemCount: true }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');

