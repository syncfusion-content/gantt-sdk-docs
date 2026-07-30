import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    let ganttInstance = null;

    const data = GanttData;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['ExcelExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttInstance.showSpinner();
            setTimeout(() => {
                ganttInstance.excelExport();
            }, 2000);
        }
    }

    function excelExportComplete() {
        ganttInstance.hideSpinner();
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="450px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            toolbarClick={toolbarClick}
            excelExportComplete={excelExportComplete}
            ref={(g) => { ganttInstance = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="180" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="120" />
                <ColumnDirective field="Progress" headerText="Progress" width="120" />
            </ColumnsDirective>

            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));