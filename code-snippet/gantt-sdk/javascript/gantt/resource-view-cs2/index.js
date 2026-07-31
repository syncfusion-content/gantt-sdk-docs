var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    dataSource: data,
    resources: resources,
    height: '430px',
    viewType: 'ResourceView',
    highlightWeekends: true,
    treeColumnIndex: 1,
    allowSelection: true,
    allowResizing: true,
    showOverAllocation: true,
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
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit',
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
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ],
    toolbar: [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
        { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }
    ],
    labelSettings: {
        rightLabel: 'resources',
        taskLabel: 'Progress'
    },
    splitterSettings: {
        columnIndex: 3
    },
    toolbarClick: function (args) {
        if (args.item.id === 'showhidebar') {
            ganttChart.showOverAllocation = ganttChart.showOverAllocation ? false : true;
        }
    }
});

ganttChart.appendTo('#Gantt');