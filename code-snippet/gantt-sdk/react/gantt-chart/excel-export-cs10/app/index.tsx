import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport } from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { getComponent } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource';
import { TaskFieldsModel, SplitterSettingsModel, ToolbarItem } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettingsModel = { columnIndex: 1 };
    const toolbar: ToolbarItem[] = ['ExcelExport', 'CsvExport'];

    const toolbarClick = (args: ClickEventArgs): void => {
        if ((args as any).item.id === 'ganttDefault_excelexport') {
            const textbox = getComponent(document.getElementById('fileNameBox') as HTMLElement, TextBoxComponent) as TextBoxComponent;
            const gantt = getComponent(document.getElementById('ganttDefault') as HTMLElement, GanttComponent) as GanttComponent;

            const excelProps: ExcelExportProperties = {
                fileName: textbox.value !== '' ? textbox.value + '.xlsx' : 'new.xlsx'
            };

            gantt.excelExport(excelProps);
        }
    };

    return (
        <div>
            <div style={{ padding: '0px 0 20px 0' }}>
                <label style={{ padding: '30px 17px 0 0', fontWeight: 'bold' }}>Enter file name: </label>
                <TextBoxComponent id="fileNameBox" placeholder="Enter file name" width={120} />
            </div>

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={GanttData}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
                toolbar={toolbar}
                toolbarClick={toolbarClick}
                allowExcelExport={true}
                treeColumnIndex={1}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                    <ColumnDirective field="StartDate" headerText="StartDate" width="150" visible={false} />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));