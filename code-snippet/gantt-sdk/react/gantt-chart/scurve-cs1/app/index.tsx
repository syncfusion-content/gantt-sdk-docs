import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, ColumnsDirective, ColumnDirective, EditSettingsModel, Toolbar, ToolbarItem, SCurve, Selection, SCurveSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    };
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const sCurveSettings: SCurveSettingsModel = {
        visible: true,
        dataSet: [
            { field: 'Progress', color: '#4CAF50' },
            { field: 'Duration', color: '#2196F3' }
        ]
    };
    return <GanttComponent dataSource={data} taskFields={taskFields} treeColumnIndex={1}
        editSettings={editOptions} toolbar={toolbarOptions} height='450px'
        timelineSettings={{ topTier: { unit: 'Week' }, bottomTier: { unit: 'Day' } }}
        sCurveSettings={sCurveSettings} splitterSettings={{ columnIndex: 2 }}
        projectStartDate={new Date(2025, 11, 28)} projectEndDate={new Date(2026, 1, 15)}>
        <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="ID" width="70" />
            <ColumnDirective field="TaskName" headerText="Task Name" width="220" />
            <ColumnDirective field="StartDate" headerText="Start Date" width="130" format="yMd" />
            <ColumnDirective field="Duration" headerText="Duration" width="100" />
            <ColumnDirective field="Progress" headerText="Progress (%)" width="120" />
        </ColumnsDirective>
        <Inject services={[Edit, SCurve, Toolbar, Selection]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));