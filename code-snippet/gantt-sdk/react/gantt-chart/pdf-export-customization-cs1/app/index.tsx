import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, PdfExportProperties, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { editingData, image } from './datasource';

function App() {
    const ganttRef: any = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            const exportProperties: PdfExportProperties = {
                header: {
                    fromTop: 0,
                    height: 150,
                    contents: [
                        {
                            type: 'Text',
                            value: 'Welcome',
                            position: { x: 380, y: 0 },
                            style: { textBrushColor: '#C25050', fontSize: 25 }
                        },
                        {
                            type: 'Image',
                            src: image,
                            position: { x: 400, y: 70 },
                            size: { height: 50, width: 50 }
                        }
                    ]
                },
                footer: {
                    fromBottom: 160,
                    height: 100,
                    contents: [
                        {
                            type: 'Text',
                            value: 'Thank you!',
                            position: { x: 350, y: 40 },
                            style: { textBrushColor: '#C67878', fontSize: 14 }
                        },
                        {
                            type: 'PageNumber',
                            pageNumberType: 'Arabic',
                            format: 'Page {$current} of {$total}',
                            position: { x: 0, y: 25 },
                            size: { height: 50, width: 100 },
                            style: { textBrushColor: '#000000', hAlign: 'Center', vAlign: 'Bottom' }
                        }
                    ]
                }
            };
            ganttRef.pdfExport(exportProperties);
        }
    };

    return (
        <GanttComponent
            ref={(g) => ganttRef = g}
            id="ganttDefault"
            height="430px"
            dataSource={editingData}
            taskFields={taskFields}
            toolbar={toolbar}
            allowPdfExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
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
    );
}

ReactDOM.render(<App />, document.getElementById('root'));