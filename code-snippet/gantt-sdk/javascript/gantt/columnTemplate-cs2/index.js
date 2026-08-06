var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
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
    splitterSettings: {
        columnIndex: 7
    },
    columns: [
        { field: 'TaskID' },
        {
            field: 'TaskName',
            template: function (props) {
                var baseUrl = 'https://www.meaningofthename.com/';
                var url = baseUrl + encodeURIComponent(props.TaskName);
                return '<a href="' + url + '" target="_blank">' + props.TaskName + '</a>';
            }
        },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');