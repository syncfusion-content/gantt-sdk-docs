var gantt = new ej.gantt.Gantt({
    dataSource: data,
    height: '460px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', width: 80 },
        { field: 'TaskName', headerText: 'Name', width: 200 },
        { field: 'Duration', headerText: 'Duration', width: 100 }
    ]
});

gantt.appendTo('#Gantt');

document.getElementById('expandAll').onclick = function () {
    gantt.expandAll();
};

document.getElementById('collapseAll').onclick = function () {
    gantt.collapseAll();
};

document.getElementById('expandLevel0').onclick = function () {
    gantt.treeGrid.expandAtLevel(0);
};

document.getElementById('collapseLevel1').onclick = function () {
    gantt.treeGrid.collapseAtLevel(1);
};

document.getElementById('expandById').onclick = function () {
    gantt.treeGrid.expandByKey(2);
};

document.getElementById('collapseById').onclick = function () {
    gantt.treeGrid.collapseByKey(1);
};

document.getElementById('expandFirstRow').onclick = function () {
    var rows = gantt.treeGrid.getRows();
    if (rows.length) {
        gantt.treeGrid.expandRow(rows[0]);
    }
};

document.getElementById('collapseFirstRow').onclick = function () {
    var rows = gantt.treeGrid.getRows();
    if (rows.length) {
        gantt.treeGrid.collapseRow(rows[0]);
    }
};