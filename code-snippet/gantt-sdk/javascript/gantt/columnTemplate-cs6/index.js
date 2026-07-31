var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
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
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 290,
            template: '#chipTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: chipTemplate
});

ganttChart.appendTo('#Gantt');

function chipTemplate(args) {
    if (args.column.field === 'TaskName') {
        var chip = new ej.buttons.ChipList({
            chips: [args.data.TaskName]
        });
        chip.appendTo(args.cell.querySelector('.chipElement'));
    }
}