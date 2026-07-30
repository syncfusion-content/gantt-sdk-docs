ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection, ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'Work',
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Work', width: '110' },
        { field: 'Duration', width: '100' },
        { field: 'taskType', headerText: 'Task Type', width: '110' }
    ],
    splitterSettings: { columnIndex: 1 },
    allowSelection: true,
    highlightWeekends: true,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('07/28/2019'),
    resources: resources,
    workUnit: 'Hour',
    taskType: 'FixedWork'
});

ganttChart.appendTo('#Gantt');