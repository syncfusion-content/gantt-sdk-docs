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
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttInstance) {
            ganttInstance.pdfExport();
        }
    }

    function pdfQueryTaskbarInfo(args) {
        const d = args.data;
        if (d.Progress < 50 && !d.hasChildRecords) {
            const bar = args.taskbar;
            bar.progressColor = new PdfColor(205, 92, 92);
            bar.taskColor = bar.taskBorderColor = new PdfColor(240, 128, 128);
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
            pdfQueryTaskbarInfo={pdfQueryTaskbarInfo}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" visible={false} />
                <ColumnDirective field="StartDate" headerText="StartDate" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));