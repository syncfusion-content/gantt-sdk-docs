import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editOptions = {
        allowAdding: true,
        allowEditing: true,
        mode: 'Auto'
    };
    const toolbarOptions = ['Add', 'Indent', 'Outdent'];
    return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} height='450px'>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));