ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    enableImmutableMode: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    }
});
ganttChart.appendTo('#Gantt');