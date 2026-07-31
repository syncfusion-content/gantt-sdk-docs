ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        indicators: 'Indicators'
    },
    editSettings: {
        allowEditing: true
    },
    toolbar: ['Edit'],
    dataBound: function () {
        var elements = document.querySelectorAll('.e-indicator-span');
        elements.forEach(function (el) {
            el.addEventListener('click', function (event) {
                var indicator = event.target;
                var taskbar = indicator.closest('.e-chart-row');

                if (taskbar) {
                    var rowIndex = Number(taskbar.getAttribute('data-rowindex'));
                    var record = ganttChart.flatData[rowIndex];
                    if (record.ganttProperties.taskId) {
                        ganttChart.openEditDialog(record.ganttProperties.taskId);
                    }
                }
            });
        });
    }
});

ganttChart.appendTo('#Gantt');