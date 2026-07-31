import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection, TaskFieldsModel, LabelSettingsModel, SplitterSettingsModel, IQueryTaskbarInfoEventArgs, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { Column, ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;

    const data: object[] = editingData;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItems[] = ['ExcelExport'];

    const labelSettings: LabelSettingsModel = {
        taskLabel: '${Progress}%'
    };

    const splitterSettings: SplitterSettingsModel = {
        columnIndex: 3
    };

    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_excelexport') {
            ganttInstance!.excelExport();
        }
    }

    function excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.field === 'Progress') {
            const progressValue = args.value as number;
            if (progressValue > 80) {
                args.style = { backColor: '#A569BD' };
            } else if (progressValue < 20) {
                args.style = { backColor: '#F08080' };
            }
        }
    }

    function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
        const progress = (args.data as { Progress: number }).Progress;
        if (progress > 80) {
            args.progressBarBgColor = '#6C3483';
            args.taskbarBgColor = args.taskbarBorderColor = '#A569BD';
        } else if (progress < 20) {
            args.progressBarBgColor = '#CD5C5C';
            args.taskbarBgColor = args.taskbarBorderColor = '#F08080';
        }
    }

    function queryCellInfo(args: QueryCellInfoEventArgs): void {
        if ((args.column as Column).field === 'Progress') {
            const progress = (args.data as { Progress: number }).Progress;
            if (progress > 80) {
                (args.cell as HTMLElement).style.backgroundColor = '#A569BD';
            } else if (progress < 20) {
                (args.cell as HTMLElement).style.backgroundColor = '#F08080';
            }
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
            labelSettings={labelSettings}
            splitterSettings={splitterSettings}
            toolbarClick={toolbarClick}
            queryCellInfo={queryCellInfo}
            excelQueryCellInfo={excelQueryCellInfo}
            queryTaskbarInfo={queryTaskbarInfo}
            ref={(g: GanttComponent | null) => {
                ganttInstance = g;
            }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" visible={false} />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));