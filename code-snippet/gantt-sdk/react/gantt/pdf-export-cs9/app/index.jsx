import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { PdfColor } from '@syncfusion/ej2-pdf-export';

function App() {

    let ganttInstance = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        predecessor: 'Predecessor',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttChart_pdfexport' && ganttInstance) {
            ganttInstance.pdfExport();
        }
    }

    function pdfQueryCellInfo(args) {
        if (args.column.field === 'Progress') {
            if (args.value < 50) {
                args.style.backgroundColor = new PdfColor(240, 128, 128);
            } else {
                args.style.backgroundColor = new PdfColor(165, 105, 189);
            }
        }
    }

    return (
        <GanttComponent
            ref={(g) => ganttInstance = g}
            id="ganttChart"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            pdfQueryCellInfo={pdfQueryCellInfo}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" clipMode="EllipsisWithTooltip" />
                <ColumnDirective field="StartDate" />
                <ColumnDirective field="Duration" />
                <ColumnDirective field="Progress" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));