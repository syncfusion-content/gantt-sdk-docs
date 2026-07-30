var dialogObj = new ej.popups.Dialog({
    visible: false,
    width: '50%',
    showCloseIcon: true,
    header: 'Selected Row Details'
});
dialogObj.appendTo('#Dialog');

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
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
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        {
            headerText: 'Employee Data',
            width: 150,
            template: '#buttonTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: buttonTemplate
});

ganttChart.appendTo('#Gantt');

function buttonTemplate(args) {
    if (args.column.headerText === 'Employee Data') {
        var btnElement = args.cell.querySelector('.view-btn');

        var btn = new ej.buttons.Button({
            cssClass: 'e-outline'
        });
        btn.appendTo(btnElement);

        btnElement.addEventListener('click', function () {
            dialogObj.content =
                '<p><b>TaskID:</b> ' + args.data.TaskID + '</p>' +
                '<p><b>TaskName:</b> ' + args.data.TaskName + '</p>' +
                '<p><b>Duration:</b> ' + args.data.Duration + '</p>';
            dialogObj.show();
        });
    }
}