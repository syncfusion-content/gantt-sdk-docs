ej.gantt.Gantt.Inject(ej.gantt.Selection,ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: virtualData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
    enableVirtualization: true,
   autoCalculateDateScheduling:false,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
    });
    ganttChart.appendTo('#Gantt');

