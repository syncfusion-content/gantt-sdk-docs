ej.gantt.Gantt.Inject(ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    sortSettings: {
        columns: [
            { field: 'TaskID', direction: 'Descending' },
            { field: 'TaskName', direction: 'Ascending' }
        ]
    }
});

ganttChart.appendTo('#Gantt');

var dropDown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'Task ID', value: 'TaskID' },
        { text: 'Task Name', value: 'TaskName' },
        { text: 'Start Date', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '120px'
});
dropDown.appendTo('#columns');

var btn = new ej.buttons.Button({ cssClass: 'e-outline' });
btn.appendTo('#removeSort');

document.getElementById('removeSort').addEventListener('click', function () {
    var field = dropDown.value;
    ganttChart.removeSortColumn(field);
});