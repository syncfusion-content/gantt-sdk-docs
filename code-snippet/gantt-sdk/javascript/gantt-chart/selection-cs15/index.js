var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    enableHover: true,
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 220 },
        { field: 'StartDate', width: 150, format: 'yMd' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');

var startInput = new ej.inputs.TextBox({ type: 'number', width: '120px' });
startInput.appendTo('#startRow');

var endInput = new ej.inputs.TextBox({ type: 'number', width: '120px' });
endInput.appendTo('#endRow');

var selectBtn = new ej.buttons.Button({ content: 'Select Rows' });
selectBtn.appendTo('#selectRows');

document.getElementById('selectRows').addEventListener('click', function () {
    var start = parseInt(startInput.value, 10);
    var end = parseInt(endInput.value, 10);

    if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= start) {
        gantt.clearSelection();
        gantt.selectionModule.selectRowsByRange(start, end);
    }
});