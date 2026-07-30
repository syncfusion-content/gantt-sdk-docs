ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: resourceCollection,
    addDialogFields: [
        { type: 'General', headerText: 'General add' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes', additionalParams: { inlineMode: { enable: true, onSelection: true } } },
        { type: "Segments" }
    ],
    editDialogFields: [
        { type: 'General', headerText: 'General edit' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes', additionalParams: { inlineMode: { enable: true, onSelection: true } } },
        { type: "Segments" }
    ],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        parentID: 'ParentID',
        segments: 'Segments',
        notes: "note",
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],

});
ganttChart.appendTo('#Gantt');