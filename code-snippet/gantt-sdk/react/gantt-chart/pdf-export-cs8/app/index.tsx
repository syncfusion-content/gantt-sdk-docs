import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel } from '@syncfusion/ej2-react-gantt';

function App() {

    let ganttInstance: GanttComponent | null = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    };

    const toolbar: string[] = ['PdfExport'];

    function toolbarClick(args: any): void {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttInstance) {
            (ganttInstance as any).pdfExport();
        }
    }

    function beforePdfExport(): void {
        if (ganttInstance) {
            (ganttInstance as any).treeGrid.columns[2].visible = false;
            (ganttInstance as any).treeGrid.columns[3].visible = true;
        }
    }

    return (
        <GanttComponent
            ref={(g) => ganttInstance = g}
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            beforePdfExport={beforePdfExport}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskId" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="StartDate" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" visible={false} />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));