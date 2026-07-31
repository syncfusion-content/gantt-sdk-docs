ej.gantt.Gantt.Inject(ej.gantt.Selection);

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: resourceCollection,
    viewType: 'ResourceView',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'resources',
            work: 'work',
            child: 'subtasks'
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
        },
        columns: [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'work', headerText: 'Work' },
            { field: 'Progress' },
            { field: 'resourceGroup', headerText: 'Group' },
            { field: 'StartDate' },
            { field: 'Duration' },
        ],
        labelSettings: {
            rightLabel: 'resources',
            leftLabel: 'TaskName',
            taskLabel: '${Progress}%'
        },
        splitterSettings: {
            columnIndex: 3
        },
        height: '450px',
        projectStartDate: new Date('03/22/2019'),
        projectEndDate: new Date('05/18/2019')
});
gantt.appendTo('#Gantt');

