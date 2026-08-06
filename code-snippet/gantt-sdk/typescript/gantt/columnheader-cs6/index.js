var gantt = new ej.gantt.Gantt({
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
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});
gantt.appendTo('#Gantt');

var dropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'TaskName', value: 'TaskName' },
        { text: 'StartDate', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '150px'
});
dropDown.appendTo('#columnList');

var textBox = new ej.inputs.TextBox({
    placeholder: 'Enter new header text',
    width: '200px'
});
textBox.appendTo('#headerText');

var button = new ej.buttons.Button({ cssClass: 'e-outline' });
button.appendTo('#changeHeader');

document.getElementById('changeHeader').addEventListener('click', function () {
    var field = dropDown.value;
    var column = gantt.treeGrid.grid.getColumnByField(field);
    if (column && textBox.value.trim() !== '') {
        column.headerText = textBox.value;
        gantt.treeGrid.grid.refreshHeader();
    }
});