var clickHandler = function (args) {
    if (args.item.id === 'GanttExport_pdfexport') {
        var name = (document.getElementById('name') && document.getElementById('name').value) || '';
        var email = (document.getElementById('email') && document.getElementById('email').value) || '';
        var message = (document.getElementById('message') && document.getElementById('message').value) || '';

        var headerText = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;

        var exportProperties = {
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
        ganttChart.pdfExport(exportProperties);
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '520px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    treeColumnIndex: 1
});
ganttChart.appendTo('#GanttExport');
