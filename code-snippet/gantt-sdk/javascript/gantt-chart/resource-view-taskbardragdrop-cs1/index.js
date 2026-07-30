var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    resources: resources,
    height: '450px',
    viewType: 'ResourceView',
    highlightWeekends: true,
    treeColumnIndex: 1,
    allowSelection: true,
    allowResizing: true,
    allowTaskbarDragAndDrop: true,
    showOverAllocation: true,
    enableMultiTaskbar: true,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('07/28/2019'),
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
        expandState: 'isExpand',
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ],
    toolbar: ['ExpandAll', 'CollapseAll'],
    labelSettings: {
        rightLabel: 'resources',
        taskLabel: 'TaskName'
    }
});

ganttChart.appendTo('#Gantt');