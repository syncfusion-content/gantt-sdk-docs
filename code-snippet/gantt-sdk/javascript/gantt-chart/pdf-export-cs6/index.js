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
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, visible: false },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    toolbarClick: function (args) {
        if (args.item.id === 'Gantt_pdfexport') {
            ganttChart.pdfExport({
                includeHiddenColumn: true
            });
        }
    }
});

ganttChart.appendTo('#Gantt');