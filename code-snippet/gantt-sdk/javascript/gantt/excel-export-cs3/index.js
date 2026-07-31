var clickHandler = function(args){
	 if (args.item.id === 'GanttExport_excelexport') {
        var excelExportProperties = {
            includeHiddenColumn: true
        };
        ganttChart.excelExport(excelExportProperties);

    }
	else if (args.item.id === 'GanttExport_csvexport') {
        var excelExportProperties = {
            includeHiddenColumn: true
        };
        ganttChart.csvExport(excelExportProperties);
    }
};

ej.gantt.Gantt.Inject(ej.gantt.ExcelExport,ej.gantt.Toolbar);

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
    treeColumnIndex: 1,
    allowExcelExport: true,
	columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },        
        { field: 'StartDate', headerText: 'Start Date', width: '150',visible:false },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    toolbar: ['ExcelExport', 'CsvExport'],
	toolbarClick: clickHandler   
});
ganttChart.appendTo('#GanttExport');