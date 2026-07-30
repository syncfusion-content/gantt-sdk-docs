ej.gantt.Gantt.Inject(ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    }
});

ganttChart.appendTo('#Gantt');

var sortBtn = new ej.buttons.Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', function () {
    ganttChart.sortModule.sortColumn('TaskID', 'Descending', false);
});