import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ExcelExport } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['ExcelExport', 'CsvExport'];

    let ganttInstance;
    const toolbarClick = (args) => {
        if (args.item && args.item.id === 'ganttDefault_excelexport') {
            const exportColumns = [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Project Name', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' }
            ];
            const excelExportProperties = {
                columns: exportColumns
            };
            ganttInstance.excelExport(excelExportProperties);
        }
    };

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={GanttData}
            taskFields={taskSettings}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            allowExcelExport={true}
            treeColumnIndex={1}
            ref={((g) => ganttInstance = g)}
        >
            <Inject services={[Toolbar, ExcelExport]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));