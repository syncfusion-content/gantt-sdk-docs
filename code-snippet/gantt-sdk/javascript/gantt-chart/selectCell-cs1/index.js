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
        mode: 'Cell',
        type: 'Single'
    }
});
ganttChart.appendTo('#Gantt');

var rowTextBox = new ej.inputs.TextBox({
    width: '100'
});
rowTextBox.appendTo('#rowIndex');

var cellTextBox = new ej.inputs.TextBox({
    width: '100'
});
cellTextBox.appendTo('#cellIndex');

var selectBtn = new ej.buttons.Button();
selectBtn.appendTo('#selectCell');

document.getElementById('selectCell').addEventListener('click', function () {
    console.log('Row Index: ' + rowTextBox.element.value + ' Cell Index: ' + cellTextBox.element.value);
    var rowIndex = parseInt(rowTextBox.element.value, 10);
    var cellIndex = parseInt(cellTextBox.element.value, 10);

    if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
        ganttChart.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex });
    }
});