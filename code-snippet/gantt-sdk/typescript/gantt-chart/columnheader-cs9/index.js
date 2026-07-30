var columnDescriptions = {
    'Task ID': 'Unique identifier for the task.',
    'Task Name': 'Name of the task.',
    'Start Date': 'The date when the task starts.',
    'Duration': 'Number of days the task will take.',
    'Progress': 'Completion percentage of the task.'
};

var tooltipObj = new ej.popups.Tooltip({
    target: '.e-headertext',
    beforeRender: function (args) {
        var headerText = args.target.innerText;
        var description = columnDescriptions[headerText];
        if (description) {
            tooltipObj.content = headerText + ': ' + description;
        }
    }
});
tooltipObj.appendTo('#Tooltip');

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');