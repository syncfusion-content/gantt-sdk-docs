ej.gantt.Gantt.Inject(ej.gantt.Sort);

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
    allowSorting: true,
    sortSettings: {
        columns: [
            { field: 'TaskID', direction: 'Descending' },
            { field: 'TaskName', direction: 'Ascending' }
        ]
    }
});

ganttChart.appendTo('#Gantt');