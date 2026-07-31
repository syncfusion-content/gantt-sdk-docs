var totalPrice = function (field, data, column) {
    return Number(data.Units) * Number(data.UnitPrice);
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
        units: 'Units',
        unitPrice: 'UnitPrice'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'Units', headerText: 'Units', width: 120, textAlign: 'Right' },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 120, textAlign: 'Right' },
        {
            field: 'TotalPrice',
            headerText: 'Total Price',
            width: 120,
            format: 'c2',
            type: 'number',
            textAlign: 'Right',
            valueAccessor: totalPrice
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

ganttChart.appendTo('#Gantt');