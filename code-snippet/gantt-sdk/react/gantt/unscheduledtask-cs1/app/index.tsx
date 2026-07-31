import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, EditSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

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

    const editSettings: EditSettingsModel = {
        allowEditing: true
    };

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            editSettings={editSettings}
            allowUnscheduledTasks={true}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));