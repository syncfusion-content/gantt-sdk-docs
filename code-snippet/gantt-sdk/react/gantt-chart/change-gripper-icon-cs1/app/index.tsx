import { GanttComponent, Inject, Edit, TaskFieldsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor',
    };
    const editSettings: EditSettingsModel = {
        allowEditing: true,
        editMode: 'Auto',
        allowTaskbarEditing: true
    };
    return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editSettings} height='400px'>
        <Inject services={[Edit]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));