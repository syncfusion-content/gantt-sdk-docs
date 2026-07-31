import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Edit, Selection, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    let ganttInstance = null;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editSettings = {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    };
    const columns = [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ];
    const toolbar = ['Delete']

    return (
        <div>
            <GanttComponent
                id="Gantt"
                height="430px"
                dataSource={data}
                taskFields={taskFields}
                editSettings={editSettings}
                columns={columns}
                toolbar={toolbar}
                ref={gantt => ganttInstance = gantt}
            >
                <Inject services={[Edit, Selection, Toolbar]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));