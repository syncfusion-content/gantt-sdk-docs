ej.gantt.Gantt.Inject(ej.gantt.RowDD, ej.gantt.Edit, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', textAlign: "Right", width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: "Left", width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: "Right", width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: "Right", width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: "Right", width: 120 },
    ],
    editSettings: {
        allowTaskbarEditing: true,
    },
    allowTaskbarDragAndDrop: true,
    allowRowDragAndDrop: true,
    splitterSettings: {
      position: '50%'
    },
});
ganttChart.appendTo('#Gantt');