import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection, Toolbar, RowDD } from '@syncfusion/ej2-react-gantt';
import { data, resourceCollection } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'Resources',
        expandState: 'IsExpand',
        parentID: 'ParentID'
    };
    const resourceFields = {
        id: 'ResourceId',
        name: 'ResourceName',
        unit: 'Unit',
        group: 'ResourceGroup'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    const labelSettings = {
        rightLabel: 'Resources',
        taskLabel: 'TaskName'
    };
    const projectStartDate = new Date('03/28/2019');
    const projectEndDate = new Date('05/18/2019');
    return <GanttComponent id='root' dataSource={data} treeColumnIndex={1} viewType='ResourceView' allowSelection={true} allowResizing={true} highlightWeekends={true} toolbar={toolbarOptions} editSettings={editSettings} projectStartDate={projectStartDate} projectEndDate={projectEndDate}
        resourceFields={resourceFields} taskFields={taskFields} labelSettings={labelSettings}
        resources={resourceCollection} showOverAllocation={true} enableMultiTaskbar={true} allowTaskbarOverlap={false}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' > </ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='180' > </ColumnDirective>
            <ColumnDirective field='work' headerText='Work' > </ColumnDirective>
            <ColumnDirective field='Progress' > </ColumnDirective>
            <ColumnDirective field='ResourceGroup' headerText='Group' > </ColumnDirective>
            <ColumnDirective field='StartDate' > </ColumnDirective>
            <ColumnDirective field='Duration' > </ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, Selection, RowDD]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));