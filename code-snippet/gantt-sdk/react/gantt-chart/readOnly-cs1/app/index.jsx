import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ContextMenu, Sort, Resize } from '@syncfusion/ej2-react-gantt';
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
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        };
        const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search', 'Indent', 'Outdent'];
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} enableContextMenu={true}  allowSorting={true} allowResizing={true} readOnly={true} height='450px'>
            <Inject services={[Edit, Selection, Toolbar, ContextMenu, Sort, Resize]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));