ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit);
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        work1: 'work1',
        work2: 'work2',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 5
    },
    gridLines: 'Both',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'work1', headerText: 'Work 1' },
        { field: 'work2', headerText: 'Work 2' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ],
    queryCellInfo: function (args) {
        switch (args.data.TaskID) {
            case 1:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
            case 2:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
            case 3:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
            case 4:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
            case 5:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
            case 7:
                if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                    args.colSpan = 2;
                }
                break;
        }
    }
});
ganttChart.appendTo('#Gantt');