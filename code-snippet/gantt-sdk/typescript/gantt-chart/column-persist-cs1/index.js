var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    enablePersistence: true,
    splitterSettings: { columnIndex: 2 },
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
        {
            field: 'TaskName',
            width: 290,
            headerTemplate: '<div style="width:20px;height:20px;">Tasks Name</div>'
        },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

ganttChart.appendTo('#Gantt');

var restoreBtn = new ej.buttons.Button();
restoreBtn.appendTo('#restore');

document.getElementById('restore').addEventListener('click', function () {
    var savedProperties = JSON.parse(ganttChart.getPersistData());
    var gridColumnsState = ganttChart.ganttColumns.slice();

    savedProperties.columns.forEach(function (col) {
        var state = gridColumnsState.find(function (c) {
            return c.field === col.field;
        });
        if (state) {
            col.headerText = 'Text Changed';
            col.template = state.template;
            col.headerTemplate = state.headerTemplate;
        }
    });

    ganttChart.treeGrid.setProperties(savedProperties);
});