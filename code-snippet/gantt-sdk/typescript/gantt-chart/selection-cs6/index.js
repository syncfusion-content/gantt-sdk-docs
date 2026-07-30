var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    }
});

ganttChart.appendTo('#Gantt');

function selectRows(indexes) {
    ganttChart.clearSelection();
    ganttChart.selectRows(indexes);
}

var buttons = [
    { id: 'btn1', rows: [1, 3] },
    { id: 'btn2', rows: [0, 2] },
    { id: 'btn3', rows: [2, 4] },
    { id: 'btn4', rows: [0, 5] },
    { id: 'btn5', rows: [1, 6] },
    { id: 'btn6', rows: [0, 7, 2] },
    { id: 'btn7', rows: [1, 6, 7] },
    { id: 'btn8', rows: [4, 6, 7] },
    { id: 'btn9', rows: [2, 5, 6] }
];

buttons.forEach(function (btn) {
    new ej.buttons.Button().appendTo('#' + btn.id);
    document.getElementById(btn.id).addEventListener('click', function () {
        selectRows(btn.rows);
    });
});