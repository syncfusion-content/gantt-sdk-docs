import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection, TaskFieldsModel, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;

    const data: object[] = GanttData;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItems[] = ['ExcelExport', 'CsvExport'];

    const formatOptions: object = { type: 'date', format: 'dd/MM/yyyy' };

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttInstance!.excelExport();
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            toolbar={toolbar}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            ref={(g: GanttComponent | null) => { ganttInstance = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width={90} type="number" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width={270} type="string" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width={150} format={formatOptions} />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width={90} type="number" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width={120} type="number" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));