var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    dataSource: data,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    allowResizing: true,
    splitterSettings: { columnIndex: 4 },
    resources: resources,
    resourceFields: { id: 'resourceId', name: 'resourceName' },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'resources', headerText: 'Resources', width: 250 },
        { field: 'EmailId', headerText: 'Email ID', width: 150 }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport({ fileName: 'new.pdf' });
        }
    },
    pdfQueryCellInfo: function (args) {
        if (args.column && args.column.headerText === 'Resources') {
            args.image = {
                height: 40,
                width: 40,
                base64: args.data && args.data.taskData ? args.data.taskData.resourcesImage : null
            };
        }
        if (args.column && args.column.headerText === 'Email ID') {
            var email = args.data && args.data.taskData ? args.data.taskData.EmailId : '';
            args.hyperLink = {
                target: 'mailto:' + email,
                displayText: email
            };
        }
    }
});

ganttChart.appendTo('#GanttExport');