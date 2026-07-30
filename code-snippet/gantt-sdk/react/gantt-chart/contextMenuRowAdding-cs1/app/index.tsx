import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, ContextMenu, Selection, Sort, Resize, Toolbar } from '@syncfusion/ej2-react-gantt';
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
        allowDeleting: true
    };
    const toolbarOptions = ['Add'];
    return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} enableContextMenu={true} toolbar={toolbarOptions} height='450px'>
        <Inject services={[Edit, ContextMenu, Selection, Sort, Resize, Toolbar]} />
    </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));