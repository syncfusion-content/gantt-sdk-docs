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
    },
	dataBound: function () {
        var headerEle = document.querySelector('.e-header-row');
        headerEle.addEventListener("dblclick", function (e) {
            var target = ej.base.closest(e.target, '.e-header-cells');
            ej.popups.DialogUtility.alert({
                title: 'Header',
                content: "Double clicked on " + target.querySelector('.e-header-text').innerText + " header",
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        });
    }
});
kanbanObj.appendTo('#Kanban');

