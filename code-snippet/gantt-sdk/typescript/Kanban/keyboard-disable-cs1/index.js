var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    allowKeyboard: false,
    columns: [
        { headerText: 'Backlog', keyField: 'Open', allowToggle: true },
        { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
        { headerText: 'Testing', keyField: 'Testing', allowToggle: true },
        { headerText: 'Done', keyField: 'Close', allowToggle: true }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    swimlaneSettings: {
        keyField: 'Assignee'
    }
});
kanbanObj.appendTo('#Kanban');

