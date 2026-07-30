import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

    let ganttChart = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttChart) {
            const exportProps = {
                exportType: 'CurrentViewData'
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
            taskFields={taskSettings}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="ID" width="100" textAlign="Left" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));