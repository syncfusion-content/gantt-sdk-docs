import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, EditSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbar: string[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
    return <GanttComponent dataSource={data} taskFields={taskFields} height='450px' updateOffsetOnTaskbarEdit={true} toolbar={toolbar} editSettings={editSettings}>
        <Inject services={[Edit, Toolbar]} />
    </GanttComponent>
};

ReactDOM.render(<App />, document.getElementById('root'));