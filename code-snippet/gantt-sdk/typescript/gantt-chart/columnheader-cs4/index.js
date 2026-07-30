var ganttChart = new ej.gantt.Gantt({
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
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');

var dropDownData = [
    { text: 'Header', value: 'Header' },
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' }
];

var dropDownList = new ej.dropdowns.DropDownList({
    dataSource: dropDownData,
    index: 0,
    width: '100px',
    change: function (args) {
        ganttChart.treeGrid.textWrapSettings.wrapMode = args.value;
        ganttChart.treeGrid.allowTextWrap = true;
    }
});

dropDownList.appendTo('#wrapMode');