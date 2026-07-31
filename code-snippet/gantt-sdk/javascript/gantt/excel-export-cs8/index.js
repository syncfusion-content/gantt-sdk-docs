var fileNameBox = new ej.inputs.TextBox({
    placeholder: 'Enter file name',
    width: 120
});
fileNameBox.appendTo('#fileNameBox');

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    splitterSettings: { columnIndex: 1 },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['ExcelExport', 'CsvExport'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'StartDate', width: 150, visible: false },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbarClick: function (args) {
        if (args.item.id === 'ganttDefault_excelexport') {
            var name = fileNameBox.value && fileNameBox.value.trim() !== '' ? fileNameBox.value.trim() : 'new';
            ganttChart.excelExport({ fileName: name + '.xlsx' });
        }
    }
});

ganttChart.appendTo('#ganttDefault');