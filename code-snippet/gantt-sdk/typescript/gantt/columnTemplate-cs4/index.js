ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    treeColumnIndex: 1,
    enableHover: false,
    splitterSettings: {
        columnIndex: 3
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
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 260 },
        {
            headerText: 'Change Color',
            width: 140,
            template: '<input class="color-input" />'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: colorPicker
});

ganttChart.appendTo('#Gantt');

function colorPicker(args) {
    if (args.column.headerText === 'Change Color') {
        var inputElement = args.cell.querySelector('input');

        if (!inputElement.classList.contains('e-colorpicker')) {
            var picker = new ej.inputs.ColorPicker({
                mode: 'Palette',
                change: change
            });
            picker.appendTo(inputElement);
        }
    }
}

function change(args) {
    var selectedRows = ganttChart.treeGrid.getSelectedRows();
    for (var row of selectedRows) {
        row.style.backgroundColor = args.value;
    }
    ganttChart.clearSelection();
}