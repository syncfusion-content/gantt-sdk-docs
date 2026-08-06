import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    let ganttRef = null;

    const data = GanttData;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['ExcelExport', 'CsvExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttRef.excelExport(undefined, undefined, undefined, true);
        }
        if (args.item.id === 'ganttDefault_csvexport') {
            ganttRef.csvExport(undefined, undefined, undefined, true);
        }
    }

    function excelExportComplete(args) {
        if (args && args.promise) {
            args.promise.then((e) => {
                exportBlob(e.blobData);
            });
        }
    }

    function exportBlob(blob) {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const url = window.URL.createObjectURL(blob);
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
            ref={(g) => { ganttRef = g; }}
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