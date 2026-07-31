var gantt;
var dropInstance;

var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

var splitterSettings = {
    columnIndex: 2
};

var filter = {
    ui: {
        create: function (args) {
            var input = ej.base.createElement('input', { className: 'flm-input' });
            args.target.appendChild(input);
            dropInstance = new ej.dropdowns.DropDownList({
                dataSource: new ej.data.DataManager(GanttData),
                fields: { text: 'TaskName', value: 'TaskName' },
                placeholder: 'Select a value',
                popupHeight: '200px'
            });
            dropInstance.appendTo(input);
        },
        write: function (args) {
            dropInstance.value = args.filteredValue;
        },
        read: function (args) {
            args.fltrObj.filterByColumn(
                args.column.field,
                args.operator,
                dropInstance.value
            );
        }
    }
};

gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250, filter: filter },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ]
});

gantt.appendTo('#Gantt');