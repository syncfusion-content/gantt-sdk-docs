ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    width: '700px',
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    splitterSettings: { columnIndex: 3 },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100, isPrimaryKey: true },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'EndDate', headerText: 'End Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 },
        {
            field: 'IsCompleted',
            headerText: 'Status',
            width: 150,
            displayAsCheckBox: true,
            type: 'boolean',
            filter: {
                type: 'Excel',
                itemTemplate: function (args) {
                    return args.IsCompleted ? 'Completed' : 'In Progress';
                }
            }
        }
    ]
});

ganttChart.appendTo('#Gantt');