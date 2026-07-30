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
    }
});

ganttChart.appendTo('#Gantt');

var dateBtn = new ej.buttons.Button();
dateBtn.appendTo('#changedate');

document.getElementById('changedate').addEventListener('click', function () {
    ganttChart.updateProjectDates(new Date('04/10/2019'), new Date('06/20/2019'), true);
});