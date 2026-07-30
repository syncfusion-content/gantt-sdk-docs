import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, ExcelExport, Selection, TaskFieldsModel, ToolbarItem } from '@syncfusion/ej2-react-gantt';
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

    const toolbar: ToolbarItem[] = ['PdfExport', 'ExcelExport'];

    let ganttRef: GanttComponent | null = null;

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault_pdfexport') {
            ganttRef.pdfExport(undefined, undefined, undefined, true);
        }
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttRef.excelExport(undefined, undefined, undefined, true);
        }
    };

    const excelExportComplete = (args: any): void => {
        args.promise.then((e: { blobData: Blob }) => {
            exportBlob(e.blobData);
        });
    };

    const pdfExportComplete = (args: any): void => {
        args.promise.then((e: { blobData: Blob }) => {
            exportBlob(e.blobData);
        });
    };

    const exportBlob = (blob: Blob): void => {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'Export';
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={editingData}
            taskFields={taskFields}
            toolbar={toolbar}
            height="430px"
            allowPdfExport={true}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            excelExportComplete={excelExportComplete}
            pdfExportComplete={pdfExportComplete}
            ref={g => (ganttRef = g)}
        >
            <Inject services={[Toolbar, PdfExport, ExcelExport, Selection]} />

            <ColumnsDirective>
                <ColumnDirective field="TaskID" />
                <ColumnDirective field="TaskName" />
                <ColumnDirective field="StartDate" />
                <ColumnDirective field="Duration" />
                <ColumnDirective field="Progress" />
            </ColumnsDirective>

        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));