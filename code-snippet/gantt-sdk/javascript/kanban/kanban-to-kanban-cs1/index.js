var kanbanOptionsA = {
    dataSource: kanbanAData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    externalDropId: ['#kanbanB'],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    showEmptyColumn: true,
    dragStop: function (args) {
        if (ej.base.closest(args.event.target, '#kanbanB')) {
            kanbanObjA.deleteCard(args.data);
            args.data.forEach(function (card, i) {
                var index = kanbanObjB.kanbanData.findIndex(function (colData) {
                    return colData[kanbanObjB.cardSettings.headerField] === card[kanbanObjB.cardSettings.headerField];
                });
                if (index !== -1) {
                    card[kanbanObjB.cardSettings.headerField] = Math.max.apply(Math, kanbanObjB.kanbanData.map(function (obj) { return parseInt(obj[kanbanObjB.cardSettings.headerField], 10); })) + ++i;
                }
            });
            kanbanObjB.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
};
var kanbanObjA = new ej.kanban.Kanban(kanbanOptionsA);
kanbanObjA.appendTo('#kanbanA');
var kanbanOptionsB = {
    dataSource: kanbanBData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    externalDropId: ['#kanbanA'],
    showEmptyColumn: true,
    dragStop: function (args) {
        if (ej.base.closest(args.event.target, '#kanbanA')) {
            kanbanObjB.deleteCard(args.data);
            args.data.forEach(function (card, i) {
                var index = kanbanObjA.kanbanData.findIndex(function (colData) {
                    return colData[kanbanObjA.cardSettings.headerField] === card[kanbanObjA.cardSettings.headerField];
                });
                if (index !== -1) {
                    card[kanbanObjA.cardSettings.headerField] = Math.max.apply(Math, kanbanObjA.kanbanData.map(function (obj) { return parseInt(obj[kanbanObjA.cardSettings.headerField], 10); })) + ++i;
                }
            });
            kanbanObjA.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
};
var kanbanObjB = new ej.kanban.Kanban(kanbanOptionsB);
kanbanObjB.appendTo('#kanbanB');

