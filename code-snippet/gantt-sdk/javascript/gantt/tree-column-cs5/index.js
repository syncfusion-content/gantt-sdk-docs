var collapsingData = [];

var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    height: '430px',
    dataSource: data,
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    dataBound: function () {
        if (ganttChart.treeGrid.initialRender && window.localStorage) {
            var storedData = JSON.parse(localStorage.getItem('collapsingData') || '[]');
            storedData.forEach(function (key) {
                ganttChart.treeGrid.collapseByKey(key);
            });
        }
    },
    collapsed: function (args) {
        collapsingData.push(args.data.TaskID);
        localStorage.setItem('collapsingData', JSON.stringify(collapsingData));
    },
    expanded: function (args) {
        var index = collapsingData.indexOf(args.data.TaskID);
        if (index !== -1) {
            collapsingData.splice(index, 1);
            localStorage.setItem('collapsingData', JSON.stringify(collapsingData));
        }
    }
});

ganttChart.appendTo('#Gantt');
