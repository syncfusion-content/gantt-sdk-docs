var ganttChart = new ej.gantt.Gantt({
    id: 'Gantt',
    dataSource: base64Data,
    height: '450px',
    rowHeight: 60,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    },
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/30/2019'),
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        leftLabel: '${TaskName} [ ${Progress}% ]',
        rightLabel: '${resourceNames}',
        taskLabel: '${Progress}%'
    },
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' }
    ],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport({ enableFooter: false });
        }
    },
    pdfQueryTaskbarInfo: function (args) {
        var gp = args.data && args.data.ganttProperties ? args.data.ganttProperties : null;

        if (args.labelSettings && gp) {
            args.labelSettings.leftLabel.value = gp.taskName + '[' + gp.progress + ']';

            if (gp.resourceNames) {
                args.labelSettings.rightLabel.value = gp.resourceNames;
                args.labelSettings.rightLabel.image = [{
                    base64: args.data.taskData.resourcesImage,
                    width: 20,
                    height: 20
                }];
            }

            args.labelSettings.taskLabel.value = gp.progress + '%';
        }
    }
});

ganttChart.appendTo('#GanttExport');