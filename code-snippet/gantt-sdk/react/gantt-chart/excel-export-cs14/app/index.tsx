import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-grids';
import { ToolbarItems } from '@syncfusion/ej2-react-gantt';
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

    const toolbar: ToolbarItems[] = ['ExcelExport'];

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttInstance!.excelExport();
        } else if (args.item.id === 'ganttDefault_csvexport') {
            ganttInstance!.csvExport();
        }
    }

    function queryCellInfoEvent(args: ExcelQueryCellInfoEventArgs): void {
        const d: any = args.data;
        if (d.TaskID === 4 && args.column.field === 'TaskName') {
            (args as any).rowSpan = 2;
        }
        if (d.TaskID === 6 && args.column.field === 'TaskName') {
            args.colSpan = 2;
        }
    }

    function excelQueryCellInfo(args: QueryCellInfoEventArgs): void {
        const d: any = args.data;
        if (d.TaskID === 4 && (args.column as Column).field === 'TaskName') {
            args.rowSpan = 2;
        }
        if (d.TaskID === 6 && (args.column as Column).field === 'TaskName') {
            args.colSpan = 2;
        }
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
            queryCellInfo={queryCellInfoEvent}
            excelQueryCellInfo={excelQueryCellInfo}
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