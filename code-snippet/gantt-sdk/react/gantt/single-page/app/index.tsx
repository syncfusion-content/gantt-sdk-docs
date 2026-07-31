import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection, TaskFieldsModel, ToolbarItem, PdfExportProperties } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    let ganttRef: GanttComponent | null = null;

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            const exportProps: PdfExportProperties = {
                fitToWidthSettings: {
                    isFitToWidth: true
                }
            };
            ganttRef.pdfExport(exportProps);
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
            ref={(g) => (ganttRef = g)}
        >
            <Inject services={[Toolbar, PdfExport, Selection]} />
            <ColumnsDirective>
                <ColumnDirective field="TaskID" />
                <ColumnDirective field="TaskName" />
                <ColumnDirective field="StartDate" />
                <ColumnDirective field="EndDate" />
                <ColumnDirective field="Duration" />
                <ColumnDirective field="Progress" />
                <ColumnDirective field="Predecessor" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));