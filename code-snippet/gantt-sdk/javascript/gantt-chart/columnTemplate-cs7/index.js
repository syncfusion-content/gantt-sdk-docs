var ganttChart = new ej.gantt.Gantt({
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
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 },
        {
            field: 'OrderStatus',
            headerText: 'Order Status',
            width: 180,
            template: '#orderStatusTemplate'
        }
    ],
    queryCellInfo: radioTemplate
});

ganttChart.appendTo('#Gantt');

function radioTemplate(args) {
    if (args.column.field === 'OrderStatus') {
        var container = args.cell.querySelector('.radio-container');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        ['Pending', 'Confirmed', 'Shipped'].forEach(function (status) {
            var input = document.createElement('input');
            container.appendChild(input);

            new ej.buttons.RadioButton({
                label: status,
                name: 'radio-' + args.data.TaskID,
                checked: args.data.OrderStatus === status,
                cssClass: 'e-success'
            }).appendTo(input);
        });
    }
}