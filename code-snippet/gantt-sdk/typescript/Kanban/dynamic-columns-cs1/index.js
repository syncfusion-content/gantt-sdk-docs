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
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');
var particularColumn = document.getElementById('particularColumn');
var column = document.getElementById('column');
particularColumn.onclick = function () {
    kanbanObj.columns[1].allowToggle= true;
};
column.onclick = function () {
    kanbanObj.columns = [
        { headerText: 'To Do', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ]
};

