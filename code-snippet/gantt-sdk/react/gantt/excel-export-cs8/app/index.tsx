import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport, Inject } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItems[] = ['ExcelExport'];

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            const excelExportProperties: ExcelExportProperties = {
                theme: {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
            };
            ganttInstance!.excelExport(excelExportProperties);
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            height="430px"
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            ref={(g: GanttComponent | null) => { ganttInstance = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="80" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
                <ColumnDirective field="Duration" headerText="Duration" width="100" textAlign="Right" />
                <ColumnDirective field="Progress" headerText="Progress" width="100" textAlign="Right" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));