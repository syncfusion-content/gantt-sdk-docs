var gantt = new ej.gantt.Gantt({
    id: 'GanttExport',
    dataSource: GanttData,
    height: '400px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    toolbar: ['ExcelExport', 'CsvExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'StartDate', width: 150, visible: false },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    allowExcelExport: true,
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_excelexport') {
            gantt.treeGrid.grid.columns[0].visible = true;
            gantt.treeGrid.grid.columns[3].visible = false;
            gantt.excelExport();
        } else if (args.item.id === 'GanttExport_csvexport') {
            gantt.treeGrid.grid.columns[0].visible = true;
            gantt.treeGrid.grid.columns[3].visible = false;
            gantt.csvExport();
        }
    },
    excelExportComplete: function () {
        gantt.treeGrid.grid.columns[0].visible = false;
        gantt.treeGrid.grid.columns[3].visible = true;
    },
    csvExportComplete: function () {
        gantt.treeGrid.grid.columns[0].visible = false;
        gantt.treeGrid.grid.columns[3].visible = true;
    }
});

gantt.appendTo('#GanttExport');