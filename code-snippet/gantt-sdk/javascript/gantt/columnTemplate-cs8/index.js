var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
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
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        {
            field: 'Discontinued',
            headerText: 'Discontinued',
            width: 150,
            textAlign: 'Center',
            template: '#checkboxTemplate'
        },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ],
    queryCellInfo: checkBoxTemplate
});

ganttChart.appendTo('#Gantt');

function checkBoxTemplate(args) {
    if (args.column.field === 'Discontinued') {
        var checkbox = args.cell.querySelector('input');
        checkbox.checked = args.data.Discontinued;
        checkbox.disabled = true;
    }
}