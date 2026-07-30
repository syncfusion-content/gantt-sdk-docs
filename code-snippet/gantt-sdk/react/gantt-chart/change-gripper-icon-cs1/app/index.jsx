import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor',
    };
    const editSettings = {
        allowEditing: true,
        editMode: 'Auto',
        allowTaskbarEditing: true
    };
    return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editSettings} height='400px'>
        <Inject services={[Edit]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));