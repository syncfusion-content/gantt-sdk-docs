var elem;
var dropdownlistObj;
var ganttChart;

var dropdownlist = {
    create: function () {
        elem = document.createElement('input');
        return elem;
    },
    read: function () {
        return dropdownlistObj.value;
    },
    destroy: function () {
        dropdownlistObj.destroy();
    },
    write: function (args) {
        dropdownlistObj = new ej.dropdowns.DropDownList({
            dataSource: ganttChart.treeGrid.grid.dataSource,
            fields: { value: 'TaskName' },
            value: args.rowData[args.column.field],
            floatLabelType: 'Auto'
        });
        dropdownlistObj.appendTo(elem);
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    editSettings: {
        allowEditing: true
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
        { field: 'TaskID' },
        { field: 'TaskName', edit: dropdownlist },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ej.gantt.Gantt.Inject(ej.gantt.Edit);

ganttChart.appendTo('#Gantt');