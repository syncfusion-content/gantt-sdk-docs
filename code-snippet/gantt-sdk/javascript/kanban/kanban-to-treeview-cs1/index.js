 var kanbanOptions = {
        dataSource: kanbanData,
        keyField: 'Status',
        columns: [
            { headerText: 'Backlog', keyField: 'Open' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        externalDropId: ['#TreeView'],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id'
        },
        showEmptyColumn: true,
        dragStop: function (args) {
            if (ej.base.closest(args.event.target, '#TreeView')) {
                kanbanObj.deleteCard(args.data);
                treeObj.addNodes(args.data);
                args.cancel = true;
            }
        }
    };
    var kanbanObj = new ej.kanban.Kanban(kanbanOptions);
    kanbanObj.appendTo('#Kanban');
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: treeViewData, id: 'Id', text: 'Status' },
        allowDragAndDrop: true,
        nodeDragStop: onTreeDragStop,
        nodeTemplate: '#treeTemplate'
    });
    treeObj.appendTo('#TreeView');
    function onTreeDragStop(args) {
        if (ej.base.closest(args.event.target, '#Kanban')) {
            var treeData = treeObj.fields.dataSource;
            var filteredData = treeData.filter(function (item) { return item.Id === parseInt(args.draggedNodeData.id, 10); });
            treeObj.removeNodes([args.draggedNodeData.id]);
            kanbanObj.openDialog('Add', filteredData[0]);
            args.cancel = true;
        }
    }


