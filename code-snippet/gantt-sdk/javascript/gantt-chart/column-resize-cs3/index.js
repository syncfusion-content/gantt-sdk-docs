var dropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'TaskID', value: 'TaskID' },
        { text: 'TaskName', value: 'TaskName' },
        { text: 'StartDate', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: 120
});
dropDown.appendTo('#fieldDropDown');

var textBox = new ej.inputs.TextBox({
    placeholder: 'Enter new width',
    width: 120
});
textBox.appendTo('#widthBox');

var resizeBtn = new ej.buttons.Button();
resizeBtn.appendTo('#resizeBtn');

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: { position: '75%' },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', width: 120, textAlign: 'Right' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 120, textAlign: 'Right' }
    ]
});
gantt.appendTo('#Gantt');

document.getElementById('resizeBtn').addEventListener('click', function () {
    var field = dropDown.value;
    var width = textBox.element.value;
    if (field && width) {
        var column = gantt.treeGrid.getColumnByField(field);
        if (column) {
            column.width = width;
            gantt.treeGrid.refreshColumns();
        }
    }
});