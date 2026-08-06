import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, ToolbarItem, PdfExportProperties } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    let ganttRef: GanttComponent;

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            const exportProperties: PdfExportProperties = {
                enableFooter: false
            };
            ganttRef.pdfExport(exportProperties);
        }
    };

    return (
        <GanttComponent
            ref={(g: any) => ganttRef = g}
            id="ganttDefault"
            height="430px"
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
    );
}

ReactDOM.render(<App />, document.getElementById('root'));