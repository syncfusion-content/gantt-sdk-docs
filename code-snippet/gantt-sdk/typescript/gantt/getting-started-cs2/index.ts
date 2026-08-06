

ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
    },
    editSettings: {
            allowEditing: true,
            mode: 'Dialog'
    }
});
ganttChart.appendTo('#Gantt');



