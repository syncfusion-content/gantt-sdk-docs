var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    showColumnMenu: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    sortSettings: {
        columns: [{ field: 'TaskName', direction: 'Ascending' }]
    },
    splitterSettings: {
        columnIndex: 5
    },
    columnMenuItems: [
        { text: 'Clear Sorting', id: 'ganttclearsorting' }
    ],
    columnMenuClick: function (args) {
        if (args.item.id === 'ganttclearsorting') {
            ganttChart.clearSorting();
        }
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');