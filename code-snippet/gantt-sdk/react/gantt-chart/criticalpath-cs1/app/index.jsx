import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, CriticalPath } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    };
    const editOptions = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbarOptions = ['CriticalPath'];
    return <GanttComponent dataSource={data} taskFields={taskFields} enableCriticalPath={true}
        editSettings={editOptions} toolbar={toolbarOptions} height='450px'>
        <Inject services={[Edit, CriticalPath, Toolbar]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));