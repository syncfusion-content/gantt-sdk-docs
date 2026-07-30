import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection, TaskFieldsModel, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource';

function App() {

    let ganttRef: GanttComponent | null = null;

    const data: object[] = GanttData;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItems[] = ['ExcelExport', 'CsvExport'];

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttRef!.excelExport(undefined, undefined, undefined, true);
        }
        if (args.item.id === 'ganttDefault_csvexport') {
            ganttRef!.csvExport(undefined, undefined, undefined, true);
        }
    }

    function excelExportComplete(args: ExcelExportCompleteArgs): void {
        if (args && args.promise) {
            args.promise.then((e: { blobData: Blob }) => {
                exportBlob(e.blobData);
            });
        }
    }

    function exportBlob(blob: Blob): void {
        const a: HTMLAnchorElement = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const url: string = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'Export';
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="370px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            excelExportComplete={excelExportComplete}
            ref={(g: GanttComponent | null) => { ganttRef = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" visible={false} />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, ExcelExport, Selection]} />

        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));