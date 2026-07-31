var dropData = ['High', 'Medium', 'Low'];

var ganttChart = new ej.gantt.Gantt({
    dataSource: data,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        priority: 'Priority',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 260 },
        {
            field: 'Priority',
            headerText: 'Task Priority',
            template: '#columnTemplate',
            width: 200
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: dropdown
});

ganttChart.appendTo('#Gantt');

function dropdown(args) {
    if (args.column.field === 'Priority') {
        var drop = new ej.dropdowns.DropDownList({
            dataSource: dropData,
            value: args.data.Priority,
            popupHeight: '150px',
            popupWidth: '150px'
        });
        drop.appendTo(args.cell.querySelector('#dropElement'));
    }
}