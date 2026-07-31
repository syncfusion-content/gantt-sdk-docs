ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height: '420px',
    treeColumnIndex: 1,
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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    toolbar: ['Add', 'Indent', 'Outdent'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
    },
    splitterSettings: {
        position: '75%'
    }
});
ganttChart.appendTo('#Gantt');