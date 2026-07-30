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
    columns: [
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});
ganttChart.appendTo('#Gantt');

var smallBtn = new ej.buttons.Button();
smallBtn.appendTo('#small');

var mediumBtn = new ej.buttons.Button();
mediumBtn.appendTo('#medium');

var bigBtn = new ej.buttons.Button();
bigBtn.appendTo('#big');

function changeHeaderHeight(height) {
    console.log(ganttChart.treeGrid.grid.getHeaderContent());
    var headerCells = ganttChart.treeGrid.grid
        .getHeaderContent()
        .querySelectorAll('.e-headercontent');

    headerCells.forEach(function (cell) {
        cell.style.height = height;
    });
}

document.getElementById('small').addEventListener('click', function () {
    changeHeaderHeight('20px');
});

document.getElementById('medium').addEventListener('click', function () {
    changeHeaderHeight('42px');
});

document.getElementById('big').addEventListener('click', function () {
    changeHeaderHeight('60px');
});
