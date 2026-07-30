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

var textObj = new ej.inputs.TextBox({
    placeholder: 'Enter search text',
    showClearButton: true,
    width: 180
});
textObj.appendTo('#search');
document.getElementById('reset').onclick = function () {
    textObj.value = '';
    kanbanObj.query = new ej.data.Query();
};
document.getElementById('search').onkeyup = function (e) {
    var searchValue = e.target.value;
    var searchQuery = new ej.data.Query();
    if (searchValue !== '') {
        searchQuery = new ej.data.Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
    }
    kanbanObj.query = searchQuery;
};

