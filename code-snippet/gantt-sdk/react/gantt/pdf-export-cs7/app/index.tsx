import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel, PdfExportProperties, ToolbarItem } from '@syncfusion/ej2-react-gantt';

function App() {

    let ganttChart: GanttComponent | null = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    function toolbarClick(args: any): void {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttChart) {
            const exportProps: PdfExportProperties = {
                showPredecessorLines: true
            };
            ganttChart.pdfExport(exportProps);
        }
    }

    return (
        <GanttComponent
            ref={(g) => ganttChart = g}
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));