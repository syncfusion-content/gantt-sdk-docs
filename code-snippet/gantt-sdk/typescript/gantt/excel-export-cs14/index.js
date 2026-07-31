ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.ExcelExport, ej.gantt.Selection);

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
    selectionSettings: {
        type: 'Multiple'
    },
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '120' },
        { field: 'Duration', headerText: 'Duration', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '120' }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            var selectedRecords = ganttChart.treeGrid.getSelectedRecords();
            var exportProperties = { dataSource: selectedRecords };
            ganttChart.excelExport(exportProperties);
        }
    }
});

ganttChart.appendTo('#GanttDefault');