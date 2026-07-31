var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    allowExcelExport: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 120 },
        { field: 'Duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 100, textAlign: 'Right' }
    ],
    toolbar: ['ExcelExport'],
    toolbarClick: function (args) {
        if (args.item && args.item.id === 'GanttDefault_excelexport') {
            var excelExportProperties = {
                header: {
                    headerRows: 7,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Northwind Traders',
                                    style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: '2501 Aerial Center Parkway',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Suite 200 Morrisville, NC 27560 USA',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' },
                                    style: { hAlign: 'Center' }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    hyperlink: { target: 'mailto:support@northwind.com' },
                                    style: { hAlign: 'Center' }
                                }
                            ]
                        }
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Thank you for your business!',
                                    style: { hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: '!Visit Again!',
                                    style: { hAlign: 'Center', bold: true }
                                }
                            ]
                        }
                    ]
                }
            };
            ganttChart.excelExport(excelExportProperties);
        }
    }
});

ganttChart.appendTo('#GanttDefault');