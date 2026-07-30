import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Edit,
    Selection,
    Toolbar,
    TaskFieldsModel,
    ResourceFieldsModel,
    EditSettingsModel,
    SplitterSettingsModel
} from '@syncfusion/ej2-react-gantt';

import { data, resources } from './datasource';
function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        work: 'Work',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const resourceFields: ResourceFieldsModel = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    };

    const toolbar: string[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];

    const columns: object[] = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Work', width: '110' },
        { field: 'Duration', width: '100' }
    ];

    const splitterSettings: SplitterSettingsModel = { columnIndex: 1 };

    const projectStartDate = new Date('03/25/2019');
    const projectEndDate = new Date('07/28/2019');

    return (
        <GanttComponent
            height="450px"
            dataSource={data}
            taskFields={taskFields}
            columns={columns}
            treeColumnIndex={1}
            editSettings={editSettings}
            allowSelection={true}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            highlightWeekends={true}
            toolbar={toolbar}
            resources={resources}
            resourceFields={resourceFields}
            workUnit="Hour"
            splitterSettings={splitterSettings}
        >
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));