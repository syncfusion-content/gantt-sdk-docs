import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, Selection }
    from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';
import { TaskFieldsModel, SelectionSettingsModel, ToolbarItem } from '@syncfusion/ej2-react-gantt';

function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const selectionSettings: SelectionSettingsModel = {
        type: 'Multiple'
    };

    const toolbar: ToolbarItem[] = ['ExcelExport'];

    let ganttInstance: GanttComponent;

    function toolbarClick(args: any) {
        if (args.item.id === 'gantt_excelexport') {
            const selectedRecords = ganttInstance.treeGrid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            ganttInstance.excelExport(exportProperties);
        }
    }

    return (
        <GanttComponent
            id="gantt"
            dataSource={GanttData}
            taskFields={taskFields}
            height="450px"
            toolbar={toolbar}
            allowExcelExport={true}
            selectionSettings={selectionSettings}
            toolbarClick={toolbarClick}
            ref={g => ganttInstance = g}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
                <ColumnDirective field="Duration" headerText="Duration" width="100" />
                <ColumnDirective field="Progress" headerText="Progress" width="120" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));