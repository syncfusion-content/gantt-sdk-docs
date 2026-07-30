import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection, Toolbar, VirtualScroll, SplitterSettingsModel, TaskFieldsModel, LabelSettingsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { virtualData } from './datasource';
function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings: SplitterSettingsModel = {
        columnIndex: 2
    };
    const labelSettings: LabelSettingsModel = {
        taskLabel: 'Progress'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbar: Toolbar[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
    const projectStartDate: Date = new Date('04/01/2019');
    const projectEndDate: Date = new Date('12/31/2025');
    return (
        <GanttComponent dataSource={virtualData} treeColumnIndex={1} labelSettings={labelSettings} projectEndDate={projectEndDate} allowSelection={true} highlightWeekends={true} enableVirtualization={true} enableTimelineVirtualization={true} projectStartDate={projectStartDate} taskFields={taskFields} splitterSettings={splitterSettings} autoCalculateDateScheduling={false} toolbar={toolbar} editSettings={editSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' />
                <ColumnDirective field='TaskName' headerText='Task Name' />
                <ColumnDirective field='StartDate' />
                <ColumnDirective field='Duration' />
                <ColumnDirective field='Progress' />
            </ColumnsDirective>
            <Inject services={[Selection, VirtualScroll, Edit, Toolbar]} />
        </GanttComponent>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));