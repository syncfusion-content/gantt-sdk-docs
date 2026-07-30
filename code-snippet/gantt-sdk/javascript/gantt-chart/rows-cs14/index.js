var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSelection: true,
    resources: resourceCollection,
    resourceFields: {
        id: 'ResourceId',
        name: 'ResourceName',
        unit: 'ResourceUnit',
        group: 'ResourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'Resources',
        work: 'Work',
        parentID: 'ParentID',
        segments: 'Segments',
        notes: 'Note'
    },
    columns: [
        { field: 'TaskID', width: '100' },
        { field: 'TaskName', headerText: 'TaskName', width: '250', clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
        { field: 'newInput' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'newInput'] },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Segments' },
        { type: 'Notes' }
    ],
    editDialogFields: [
        { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'newInput'] },
        { type: 'Dependency' },
        { type: 'Notes' },
        { type: 'Resources' },
        { type: 'Segments' }
    ]
});

ganttChart.appendTo('#Gantt');