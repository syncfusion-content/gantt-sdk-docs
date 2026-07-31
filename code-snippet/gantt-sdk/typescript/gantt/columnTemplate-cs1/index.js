var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    rowHeight: 60,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    },
    resourceFields: {
        id: 'resourceID',
        name: 'resourceName'
    },
    resources: ProjectResources,
    splitterSettings: {
        columnIndex: 7
    },
    columns: [
        { field: 'TaskID' },
        {
            field: 'resources',
            headerText: 'Resources',
            width: 250,
            textAlign: 'Center',
            template: function (props) {
                return '<div class="image">' +
                    '<img src="' + props.TaskID + '.png" style="height:42px" />' +
                    '</div>';
            }
        },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');