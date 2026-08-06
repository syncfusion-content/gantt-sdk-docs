var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    enableContextMenu: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    toolbar: [
        'Add', 'Edit', 'Update', 'Delete',
        'Cancel', 'ExpandAll', 'CollapseAll'
    ],
    onTaskbarClick: function (args) {
        console.log(args);
        var element = args.taskbarElement;
        var indexAttr = element.getAttribute('data-segment-index');
        var message = '';

        if (indexAttr === null || indexAttr === undefined) {
            message = 'Task clicked (not a segment)';
            document.getElementById('message').innerText = message;
            return;
        }

        var index = Number(indexAttr);
        var segments = args.data.ganttProperties.segments;
        var segment = segments[index];

        message = 'Segment ' + segment.segmentIndex + ' clicked';
        document.getElementById('message').innerText = message;
    }
});

ganttChart.appendTo('#Gantt');