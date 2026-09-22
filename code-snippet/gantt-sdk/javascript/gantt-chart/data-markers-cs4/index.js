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

var hideBtn = new ej.buttons.Button({
    content: 'Hide data markers'
});
hideBtn.appendTo('#hideBtn');

var showBtn = new ej.buttons.Button({
    content: 'Show data markers'
});
showBtn.appendTo('#showBtn');

document.getElementById('hideBtn').addEventListener('click', function () {
    var nodes = ganttChart.element.querySelectorAll('.e-indicator-span');
    nodes.forEach(function (box) {
        box.style.display = 'none';
    });
});

document.getElementById('showBtn').addEventListener('click', function () {
    var nodes = ganttChart.element.querySelectorAll('.e-indicator-span');
    nodes.forEach(function (box) {
        box.style.display = '';
    });
});
