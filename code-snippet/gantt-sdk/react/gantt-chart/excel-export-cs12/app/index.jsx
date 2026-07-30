import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['ExcelExport', 'CsvExport'];

    let ganttRef;

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_excelexport') {
            const excelExportProperties = {
                enableFilter: true
            };
            ganttRef.excelExport(excelExportProperties);
        }
    }

    return (
        <GanttComponent id="ganttDefault"
            dataSource={GanttData}
            taskFields={taskFields}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            allowExcelExport={true}
            allowFiltering={true}
            treeColumnIndex={1}
            height="430px"
            ref={g => ganttRef = g}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="StartDate" width="150" visible={false} />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Filter]} />

        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));