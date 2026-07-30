import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
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
    const editSettings: any = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    return <GanttComponent dataSource={data} taskFields={taskFields} allowRowDragAndDrop={true} editSettings={editSettings} allowTaskbarDragAndDrop={true} height='450px'>
        <Inject services={[RowDD, Edit, Selection]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));