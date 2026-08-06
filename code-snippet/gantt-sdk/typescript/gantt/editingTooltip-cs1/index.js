ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true
    },
    tooltipSettings: {
        showTooltip: true,
        taskbar: function (props) {
            return '<div>' +
                '<div><b>' + props.TaskName + '</b></div>' +
                '<div>Duration : ' + props.Duration + '</div>' +
                '</div>';
        }
    }
});

ganttChart.appendTo('#Gantt');