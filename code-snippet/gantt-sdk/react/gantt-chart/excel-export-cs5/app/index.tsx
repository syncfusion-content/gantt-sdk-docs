import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, ColumnsDirective, ColumnDirective, Selection, ExcelExportProperties, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    let ganttInstance: GanttComponent;
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    };
    const toolbarOptions: ToolbarItem[] = ['ExcelExport', 'CsvExport'];
    function toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'GanttExport_excelexport') {
            const excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: true
            };
            ganttInstance.excelExport(excelExportProperties);
        } else if (args.item.id === 'GanttExport_csvexport') {
            const excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: true
            };
            ganttInstance.csvExport(excelExportProperties);
        }
    };
    return (
        <GanttComponent
            id='GanttExport'
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbarOptions}
            toolbarClick={toolbarClick}
            allowExcelExport={true}
            height='400px'
            ref={gantt => ganttInstance = gantt}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Left' width='100' ></ColumnDirective>
                <ColumnDirective field='TaskName' headerText='Task Name' width='150'></ColumnDirective>
                <ColumnDirective field='StartDate' headerText='StartDate' width='150' visible={false}></ColumnDirective>
                <ColumnDirective field='Duration' headerText='Duration' width='150' ></ColumnDirective>
                <ColumnDirective field='Progress' headerText='Progress' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));