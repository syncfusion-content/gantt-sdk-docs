var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Review', keyField: 'Review' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    stackedHeaders: [
        { text: 'To Do', keyFields: 'Open' },
        { text: 'Development Phase', keyFields: 'InProgress, Review' },
        { text: 'Done', keyFields: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');

