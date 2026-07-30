var clickHandler = function(args){
	if (args.item.id === 'GanttExport_excelexport') {
			ganttChart.excelExport();
		} else if (args.item.id === 'GanttExport_csvexport') {
			ganttChart.csvExport();
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
    allowExcelExport: true,
    toolbar: ['ExcelExport', 'CsvExport'],
	toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');