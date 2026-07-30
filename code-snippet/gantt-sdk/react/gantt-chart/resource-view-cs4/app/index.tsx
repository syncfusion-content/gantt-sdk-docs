import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, ResourceFieldsModel, EditSettingsModel, LabelSettingsModel, ColumnModel, RowDD, Inject, Edit, Toolbar, Selection, Resize } from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        expandState: 'isExpand',
        parentID: 'ParentID'
    };
    const resourceFields: ResourceFieldsModel = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const columns: ColumnModel[] = [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
    const toolbar: (string | object)[] = ['ExpandAll', 'CollapseAll'];
    const labelSettings: LabelSettingsModel = {
        rightLabel: 'resources',
        taskLabel: 'TaskName'
    };

    return (
        <GanttComponent
            dataSource={data}
            resources={resources}
            taskFields={taskSettings}
            resourceFields={resourceFields}
            editSettings={editSettings}
            columns={columns}
            toolbar={toolbar}
            labelSettings={labelSettings}
            allowSelection={true}
            allowResizing={true}
            highlightWeekends={true}
            treeColumnIndex={1}
            allowTaskbarDragAndDrop={true}
            projectStartDate={new Date('03/25/2019')}
            projectEndDate={new Date('07/28/2019')}
            viewType='ResourceView'
            showOverAllocation={true}
            enableMultiTaskbar={true}
            height='450px'
        >
            <Inject services={[RowDD, Edit, Toolbar, Selection, Resize]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));