import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ExcelExport, ColumnsDirective, ColumnDirective, Selection } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';
function App() {
    let ganttInstance;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const toolbarOptions = ['ExcelExport', 'CsvExport'];

    function toolbarClick(args) {
        if (args.item.id === 'GanttExport_excelexport') {
            ganttInstance.treeGrid.grid.columns[0].visible = true;
            ganttInstance.treeGrid.grid.columns[3].visible = false;
            ganttInstance.excelExport();
        } else if (args.item.id === 'GanttExport_csvexport') {
            ganttInstance.treeGrid.grid.columns[0].visible = true;
            ganttInstance.treeGrid.grid.columns[3].visible = false;
            ganttInstance.csvExport();
        }
    }

    function excelExportComplete() {
        ganttInstance.treeGrid.grid.columns[0].visible = false;
        ganttInstance.treeGrid.grid.columns[3].visible = true;

    }
    return <GanttComponent id='GanttExport' dataSource={GanttData} taskFields={taskFields} toolbar={toolbarOptions}
        toolbarClick={toolbarClick} excelExportComplete={excelExportComplete} allowExcelExport={true} height='400px' ref={gantt => ganttInstance = gantt} treeColumnIndex={1}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Left' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='150'></ColumnDirective>
            <ColumnDirective field='StartDate' headerText='StartDate' width='150' visible={false}></ColumnDirective>
            <ColumnDirective field='Duration' headerText='Duration' width='150' ></ColumnDirective>
            <ColumnDirective field='Progress' headerText='Progress' width='150'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Selection]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));