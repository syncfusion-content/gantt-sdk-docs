ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.ExcelExport, ej.gantt.Selection);

var gantt = new ej.gantt.Gantt({
    id: 'ganttDefault',
    height: '450px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport'],
    allowExcelExport: true,

    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            gantt.showSpinner();
            setTimeout(function () {
                gantt.excelExport();
            }, 2000);
        }
    },

    excelExportComplete: function () {
        gantt.hideSpinner();
    },

    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 120 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ]
});

gantt.appendTo('#GanttDefault');