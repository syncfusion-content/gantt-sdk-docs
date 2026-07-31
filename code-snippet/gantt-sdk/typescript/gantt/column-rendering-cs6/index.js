var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
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
    treeColumnIndex: 1,
    rowDataBound: function (args) {
        var row = args.row;
        if (row) {
            var rowIndex = parseInt(row.getAttribute('aria-rowindex') || '0', 10);
            var cells = row.querySelectorAll('.e-rowcell');
            if (cells.length > 0) {
                cells[0].textContent = rowIndex.toString();
            }
        }
    },
    columns: [
        { field: 'SNo', headerText: 'S.No', width: 100 },
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 290 },
        { field: 'StartDate', headerText: 'StartDate', width: 120, textAlign: 'Right' },
        { field: 'Duration', headerText: 'Duration', width: 90 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

ganttChart.appendTo('#Gantt');