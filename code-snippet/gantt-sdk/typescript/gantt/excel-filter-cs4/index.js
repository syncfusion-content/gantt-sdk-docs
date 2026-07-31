ej.gantt.Gantt.Inject(ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '370px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250, clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate', headerText: 'Start Date', width: 200 },
        { field: 'Duration', headerText: 'Duration', width: 160 },
        { field: 'Progress', headerText: 'Progress', width: 200 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    filterSettings: {
        type: 'Excel'
    },
    actionBegin: function (args) {
        if (args.requestType === 'filterchoicerequest' || args.requestType === 'filtersearchbegin') {
            args.filterChoiceCount = 1000;
        }
    }
});

ganttChart.appendTo('#Gantt');