ej.gantt.Gantt.Inject(ej.gantt.Filter);

var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    parentID: 'ParentID'
};

var columns = [
    { field: 'TaskID', headerText: 'Task ID', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

var fieldData = columns.map(function (col) { return col.field; });
var typeData = ['Menu', 'Excel'];

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: { columnIndex: 2 },
    columns: columns
});
gantt.appendTo('#Gantt');

var fieldDropDown = new ej.dropdowns.DropDownList({
    dataSource: fieldData,
    placeholder: 'Select column',
    change: onFieldChange
});
fieldDropDown.appendTo('#fieldDropDown');

var typeDropDown = new ej.dropdowns.DropDownList({
    dataSource: typeData,
    placeholder: 'Select filter type',
    enabled: false,
    change: onTypeChange
});
typeDropDown.appendTo('#typeDropDown');

function onFieldChange() {
    typeDropDown.enabled = true;

    var selectedField = fieldDropDown.value;
    var column = null;

    for (var i = 0; i < columns.length; i++) {
        if (columns[i].field === selectedField) {
            column = columns[i];
            break;
        }
    }

    var nextType = (column && column.filter && column.filter.type) ? column.filter.type : null;
    typeDropDown.value = nextType;
    typeDropDown.dataBind();
}

function onTypeChange(args) {
    var selectedField = fieldDropDown.value;
    var selectedType = args.value;

    var column = null;
    for (var i = 0; i < columns.length; i++) {
        if (columns[i].field === selectedField) {
            column = columns[i];
            break;
        }
    }

    if (column) {
        column.filter = Object.assign({}, (column.filter || {}), { type: selectedType });
        typeDropDown.value = selectedType;
        typeDropDown.dataBind();
        gantt.refresh();
    }
}