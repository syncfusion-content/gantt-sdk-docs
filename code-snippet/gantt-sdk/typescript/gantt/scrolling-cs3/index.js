var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '315px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowSelection: true
});
ganttChart.appendTo('#Gantt');

var rowInput = new ej.inputs.TextBox({ width: '150px', placeholder: 'e.g., 1' });
rowInput.appendTo('#rowInput');

var dateInput = new ej.inputs.TextBox({ width: '150px', placeholder: 'MM/DD/YYYY' });
dateInput.appendTo('#dateInput');

var taskInput = new ej.inputs.TextBox({ width: '150px', placeholder: 'e.g., 3' });
taskInput.appendTo('#taskId');

var selectBtn = new ej.buttons.Button();
selectBtn.appendTo('#selectRow');

var scrollDateBtn = new ej.buttons.Button();
scrollDateBtn.appendTo('#scrollToDate');

var scrollTaskBtn = new ej.buttons.Button();
scrollTaskBtn.appendTo('#scrollTask');

document.getElementById('selectRow').onclick = function () {
    var value = parseInt(rowInput.value, 10);
    if (!isNaN(value)) {
        ganttChart.selectionModule.selectRow(value);
        var position = ganttChart.rowHeight * value;
        ganttChart.setScrollTop(position);
    }
};

document.getElementById('scrollToDate').onclick = function () {
    var value = dateInput.value;
    if (value) {
        ganttChart.scrollToDate(value);
    }
};

document.getElementById('scrollTask').onclick = function () {
    var value = taskInput.value;
    console.log(typeof (value));
    if (value) {
        ganttChart.scrollToTask(value);
    }
};