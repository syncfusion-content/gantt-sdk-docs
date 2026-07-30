import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport } from '@syncfusion/ej2-react-gantt';
import { editingData } from './datasource';

function App() {
    let ganttInstance = null;

    const data = editingData;

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
            const excelProps = {
                dataSource: editingData.slice(0, 4)
            };
            ganttInstance.excelExport(excelProps);
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            ref={(g) => { ganttInstance = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="180" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="120" />
                <ColumnDirective field="Progress" headerText="Progress" width="120" />
            </ColumnsDirective>

            <Inject services={[Toolbar, ExcelExport]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));