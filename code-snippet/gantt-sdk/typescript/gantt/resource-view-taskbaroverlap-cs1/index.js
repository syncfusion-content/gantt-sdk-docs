var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    treeColumnIndex: 1,
    viewType: 'ResourceView',
    allowSelection: true,
    allowResizing: true,
    highlightWeekends: true,
    showOverAllocation: true,
    enableMultiTaskbar: true,
    allowTaskbarOverlap: false,
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'Resources',
        expandState: 'IsExpand',
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'ResourceId',
        name: 'ResourceName',
        unit: 'Unit',
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
    labelSettings: {
        rightLabel: 'Resources',
        taskLabel: 'TaskName'
    },
    resources: resourceCollection,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'ResourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ]
});

ganttChart.appendTo('#Gantt');