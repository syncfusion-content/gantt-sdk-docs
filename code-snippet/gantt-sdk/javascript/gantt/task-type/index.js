ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var resources = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    highlightWeekends: true,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('04/30/2019'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        parentID: 'ParentID',
        work: 'Work',
        taskType: 'taskType'
    },
    resources: resources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    },
    resourceNameMapping: 'resourceName',
    resourceIDMapping: 'resourceId',
    resourceUnitMapping: 'Unit',
    workUnit: 'hour',
    taskType: 'FixedWork', 
    treeColumnIndex: 1,
    toolbar: [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'
    ],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Work', width: '110' },
        { field: 'Duration', width: '100' },
        { field: 'taskType', headerText: 'Task Type', width: '110' }
    ]
});
ganttChart.appendTo('#Gantt');