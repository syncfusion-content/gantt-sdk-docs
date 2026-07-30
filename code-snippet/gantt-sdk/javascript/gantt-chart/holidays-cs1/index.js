
var ganttChart = new ej.gantt.Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    holidays: [
        {
            from: '04/04/2019',
            to: '04/05/2019',
            label: 'Public holidays',
            cssClass: 'e-custom-holiday'
        },
        {
            from: '04/12/2019',
            to: '04/12/2019',
            label: 'Local holidays',
            cssClass: 'e-custom-holiday'
        }
    ],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});

ganttChart.appendTo('#Gantt');