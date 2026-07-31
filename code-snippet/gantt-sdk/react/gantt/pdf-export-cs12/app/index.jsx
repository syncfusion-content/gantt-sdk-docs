import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    let ganttRef = null;

    const toolbarClick = (args) => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            const exportProperties = {
                theme: 'Fabric'
            };
            ganttRef.pdfExport(exportProperties);
        }
    };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={editingData}
            taskFields={taskFields}
            toolbar={toolbar}
            height="430px"
            treeColumnIndex={1}
            allowPdfExport={true}
            toolbarClick={toolbarClick}
            ref={(g) => (ganttRef = g)}
        >
            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));