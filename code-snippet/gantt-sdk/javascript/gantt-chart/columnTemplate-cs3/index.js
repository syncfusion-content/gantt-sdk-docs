var lineData = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1]
];

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        customData: 'customData'
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        {
            field: 'customData',
            headerText: 'Custom Data',
            width: 280,
            template: function (props) {
                var id = 'spark-' + props.TaskID;
                setTimeout(function () {
                    var sparkline = new ej.charts.Sparkline({
                        height: '50px',
                        width: '100%',
                        type: 'Line',
                        lineWidth: 2,
                        valueType: 'Numeric',
                        fill: '#3C78EF',
                        dataSource: lineData[props.TaskID - 1]
                    });
                    sparkline.appendTo('#' + id);
                }, 0);
                return '<div id="' + id + '"></div>';
            }
        }
    ]
});

ganttChart.appendTo('#Gantt');