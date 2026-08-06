ej.gantt.Gantt.Inject(ej.gantt.Sort);

var message = '';

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    actionBegin: function (args) {
        if (args.requestType === 'sorting' && args.columnName === 'TaskID') {
            message = args.requestType + ' action cancelled for ' + args.columnName + ' column';
            args.cancel = true;
            updateMessage();
        }
    },
    actionComplete: function (args) {
        if (args.requestType === 'sorting' && args.columnName === 'StartDate') {
            message = args.requestType + ' action cancelled for ' + args.columnName + ' column';
            updateMessage();
        }
    }
});

ganttChart.appendTo('#Gantt');

function updateMessage() {
    var msgElement = document.getElementById('message');
    if (msgElement) {
        msgElement.innerText = message;
    }
}