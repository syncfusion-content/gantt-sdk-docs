import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection, TaskFieldsModel, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    let ganttInstance: GanttComponent | null = null;

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            ganttInstance.pdfExport();
        }
    };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={editingData}
            taskFields={taskFields}
            toolbar={toolbar}
            height="430px"
            allowPdfExport={true}
            toolbarClick={toolbarClick}
            ref={g => (ganttInstance = g)}
        >
            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));