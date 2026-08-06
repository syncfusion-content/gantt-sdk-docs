var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        indicators: 'Indicators'
    }
});

ganttChart.appendTo('#Gantt');

var indicatorBtn = new ej.buttons.Button({
    content: 'Indicator background change'
});
indicatorBtn.appendTo('#indicatorBtn');

document.getElementById('indicatorBtn').addEventListener('click', function () {
    var nodes = ganttChart.element.querySelectorAll('.e-indicator-span');
    nodes.forEach(function (box) {
        var icon = box.children[0];
        if (icon) {
            icon.style.color = 'red';
        }
    });
});