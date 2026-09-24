let gantt = new ej.gantt.Gantt({
    id: 'ganttDefault',
    height: '520px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex: 1,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: (args) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            const name = (document.getElementById('name')).value || '';
            const email = (document.getElementById('email')).value || '';
            const message = (document.getElementById('message')).value || '';

            const headerText =
                `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

            const exportProperties = {
                header: {
                    fromTop: 100,
                    height: 150,
                    contents: [
                        {
                            type: 'Text',
                            value: headerText,
                            position: { x: 50, y: 30 },
                            style: {
                                textBrushColor: '#C25050',
                                fontSize: 30,
                                hAlign: 'Center',
                                vAlign: 'Top'
                            }
                        }
                    ]
                },
                footer: {
                    fromBottom: 0,
                    height: 0,
                    contents: []
                },
                fitToWidthSettings: {
                    isFitToWidth: true
                }
            };

            gantt.pdfExport(exportProperties);
        }
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#GanttExport');