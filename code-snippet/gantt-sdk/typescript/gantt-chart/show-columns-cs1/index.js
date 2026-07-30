ej.gantt.Gantt.Inject(ej.gantt.Reorder);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90, visible: false },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 150 }
    ]
});

ganttChart.appendTo('#Gantt');

var switchObj = new ej.buttons.Switch({
    change: function (args) {
        var durationColumn = ganttChart.treeGrid.grid.getColumnByField('Duration');
        durationColumn.visible = args.checked;
        ganttChart.treeGrid.grid.refreshColumns();
    }
});

switchObj.appendTo('#switch');