var gantt = new ej.gantt.Gantt({
    height: '370px',
    dataSource: GanttData,
    enableHover: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Cell',
        type: 'Multiple'
    },
    columns: [
        { field: 'TaskID', headerText: 'ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');

function selectCells(rowIndex, cellIndex) {
    gantt.clearSelection();
    gantt.selectCells([
        { rowIndex: rowIndex, cellIndexes: [cellIndex] }
    ]);
}

document.getElementById('btn0').onclick = function () { selectCells(0, 0); };
document.getElementById('btn1').onclick = function () { selectCells(1, 1); };
document.getElementById('btn2').onclick = function () { selectCells(2, 2); };
document.getElementById('btn3').onclick = function () { selectCells(3, 3); };
document.getElementById('btn4').onclick = function () { selectCells(4, 4); };
document.getElementById('btn5').onclick = function () { selectCells(5, 0); };
document.getElementById('btn6').onclick = function () { selectCells(6, 1); };
document.getElementById('btn7').onclick = function () { selectCells(7, 2); };
document.getElementById('btn8').onclick = function () { selectCells(3, 4); };