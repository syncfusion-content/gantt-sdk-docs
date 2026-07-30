import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {

    let ganttRef = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    const toolbarClick = (args) => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            const name = document.getElementById('name').value || '';
            const email = document.getElementById('email').value || '';
            const message = document.getElementById('message').value || '';
            const headerText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const exportProperties = {
                header: {
                    fromTop: 100,
                    height: 150,
                    contents: [
                        {
                            type: 'Text',
                            value: headerText,
                            position: { x: 50, y: 30 },
                            style: { textBrushColor: '#C25050', fontSize: 30, hAlign: 'Center', vAlign: 'Top' }
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
            ganttRef.pdfExport(exportProperties);
        }
    };

    return (
        <div>
            <div className="form-container">
                <form id="formComponent">
                    <div className="e-input-group">
                        <input className="e-input" id="name" type="text" placeholder=" " required />
                        <span className="e-float-text">Name</span>
                    </div>
                    <div className="e-input-group">
                        <input className="e-input" id="email" type="email" placeholder=" " required />
                        <span className="e-float-text">Email</span>
                    </div>
                    <div className="e-input-group">
                        <textarea className="e-input" id="message" rows={2} placeholder=" "></textarea>
                        <span className="e-float-text">Message</span>
                    </div>
                </form>
            </div>

            <div className="gantt-container">
                <GanttComponent
                    ref={(g) => ganttRef = g}
                    id="ganttDefault"
                    height="520px"
                    dataSource={editingData}
                    taskFields={taskSettings}
                    toolbar={toolbar}
                    toolbarClick={toolbarClick}
                    allowPdfExport={true}
                    treeColumnIndex={1}
                >
                    <ColumnsDirective>
                        <ColumnDirective field="TaskID" />
                        <ColumnDirective field="TaskName" />
                        <ColumnDirective field="StartDate" />
                        <ColumnDirective field="Duration" />
                        <ColumnDirective field="Progress" />
                    </ColumnsDirective>
                    <Inject services={[Toolbar, PdfExport, Selection]} />
                </GanttComponent>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));