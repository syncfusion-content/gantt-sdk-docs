var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    allowResizing: true,
    showColumnMenu: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

ganttChart.appendTo('#Gantt');
