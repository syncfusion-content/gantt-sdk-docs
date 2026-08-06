var ganttChart = new ej.gantt.Gantt({
    id: 'ganttDefault',
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    },
    editSettings: {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['PdfExport'],
    gridLines: 'Both',
    allowPdfExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'EndDate', headerText: 'End Date' }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport();
        }
    },
    queryTaskbarInfo: function (args) {
        var taskData = args.data && args.data.taskData ? args.data.taskData : null;
        if (taskData && taskData.Segments) {
            var segmentIndex = args.taskbarElement && args.taskbarElement.dataset
                ? args.taskbarElement.dataset.segmentIndex
                : null;

            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = 'green';
            }
        }
    },
    pdfQueryTaskbarInfo: function (args) {
        var taskbar = args.taskbar;
        if (taskbar && taskbar.taskSegmentStyles && taskbar.taskSegmentStyles.length > 1) {
            taskbar.taskSegmentStyles[1].taskColor = new ej.pdfexport.PdfColor(255, 0, 0);
            taskbar.taskSegmentStyles[1].progressColor = new ej.pdfexport.PdfColor(0, 128, 0);
            taskbar.taskSegmentStyles[1].taskBorderColor = new ej.pdfexport.PdfColor(0, 0, 0);
        }
    }
});

ganttChart.appendTo('#GanttExport');