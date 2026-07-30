import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Edit, Selection, Toolbar, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const columns = [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }],

    const editSettings = {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    };

    const toolbar = ['Delete'];

    return (
        <GanttComponent
            id="Gantt"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            columns={columns}
            editSettings={editSettings}
            toolbar={toolbar}
        >
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));