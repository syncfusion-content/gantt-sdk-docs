import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
    return <GanttComponent dataSource={data} taskFields={taskFields} height='450px' updateOffsetOnTaskbarEdit={false} toolbar={toolbar} editSettings={editSettings}>
        <Inject services={[Edit, Toolbar]} />
    </GanttComponent>
};

ReactDOM.render(<App />, document.getElementById('root'));