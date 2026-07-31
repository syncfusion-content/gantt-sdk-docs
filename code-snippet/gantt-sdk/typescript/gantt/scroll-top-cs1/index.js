var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: '50%'
    }
});
ganttChart.appendTo('#Gantt');

var scrollBtn = new ej.buttons.Button();
scrollBtn.appendTo('#scrolltop');

document.getElementById('scrolltop').addEventListener('click', function () {
    ganttChart.ganttChartModule.scrollObject.setScrollTop(200);
});