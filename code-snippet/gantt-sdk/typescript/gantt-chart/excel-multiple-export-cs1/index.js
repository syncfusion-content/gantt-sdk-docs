ej.gantt.Gantt.Inject(ej.gantt.ExcelExport,ej.gantt.Toolbar);

var firstGantt = new ej.gantt.Gantt({
    dataSource: firstGanttData,
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
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height:280,
    toolbar: ['ExcelExport']	
});
firstGantt.appendTo('#GanttExport1');

var secondGantt = new ej.gantt.Gantt({
    dataSource: secondGanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    height:250,
    allowExcelExport: true
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = function(args) {
    if (args.item.id === 'GanttExport1_excelexport') {
        var appendExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };

        var firstGanttExport= firstGantt.excelExport(appendExcelExportProperties, true);
        firstGanttExport.then(function(fData){
            secondGantt.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}