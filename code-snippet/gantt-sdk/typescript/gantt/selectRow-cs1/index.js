ej.gantt.Gantt.Inject(ej.gantt.Selection);

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
        type: 'Single'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', width: 200 },
        { field: 'StartDate', width: 120, format: 'yMd' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

ganttChart.appendTo('#Gantt');

var textBox = new ej.inputs.TextBox({ width: '100px' });
textBox.appendTo('#rowIndex');

var button = new ej.buttons.Button();
button.appendTo('#selectRow');

document.getElementById('selectRow').addEventListener('click', function () {
    var index = parseInt(textBox.value, 10);
    if (!isNaN(index)) {
        ganttChart.selectRow(index);
    }
});