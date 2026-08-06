var ganttChart = new ej.gantt.Gantt({
    id: 'Gantt',
    dataSource: base64Data,
    height: '450px',
    rowHeight: 45,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        child: 'subtasks',
        resourceInfo: 'resources'
    },
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    splitterSettings: {
        columnIndex: 2
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' }
    ],
    toolbarClick: function (args) {
        if (args.item.text === 'PDF export') {
            ganttChart.pdfExport({ enableFooter: false });
        }
    },
    pdfQueryTaskbarInfo: function (args) {
        var data = args.data;
        if (data && data.ganttProperties && data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20,
                height: 20,
                base64: data.taskData.resourcesImage
            }];
            args.taskbarTemplate.value = data.TaskName;
        }
    }
});

ganttChart.appendTo('#GanttExport');