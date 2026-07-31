import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;

    const data: object[] = GanttData;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItems[] = ['ExcelExport', 'CsvExport'];

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttInstance!.excelExport();
        } else if (args.item.id === 'ganttDefault_csvexport') {
            ganttInstance!.csvExport();
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            height="370px"
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            toolbarClick={toolbarClick}
            ref={(g: GanttComponent | null) => { ganttInstance = g; }}
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