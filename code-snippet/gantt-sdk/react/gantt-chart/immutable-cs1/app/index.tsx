import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Toolbar, ToolbarItem, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    };
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search', 'Indent', 'Outdent'];
    return <GanttComponent dataSource={data} taskFields={taskFields} enableImmutableMode={true}
        height='450px' editSettings={editOptions} toolbar={toolbarOptions}>
        <Inject services={[Selection, Toolbar, Edit]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));