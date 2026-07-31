import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Edit,
    Selection,
    Toolbar
} from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        parentID: 'ParentID'
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit',
        group: 'resourceGroup'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const columns = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
    const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    const labelSettings = { rightLabel: 'resources' };
    const splitterSettings = { columnIndex: 3 };
    const projectStartDate = new Date('03/25/2019');
    const projectEndDate = new Date('07/28/2019');
    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            resources={resources}
            taskFields={taskSettings}
            resourceFields={resourceFields}
            editSettings={editSettings}
            columns={columns}
            labelSettings={labelSettings}
            splitterSettings={splitterSettings}
            toolbar={toolbar}
            highlightWeekends={true}
            treeColumnIndex={1}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            viewType="ResourceView"
        >
            <Inject services={[Toolbar, Edit, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));