ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.ExcelExport, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport', 'CsvExport'],
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90, type: 'number' },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270, type: 'string' },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 150, format: { type: 'date', format: 'dd/MM/yyyy' } },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90, type: 'number' },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120, type: 'number' }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            ganttChart.excelExport();
        }
    }
});

ganttChart.appendTo('#GanttDefault');