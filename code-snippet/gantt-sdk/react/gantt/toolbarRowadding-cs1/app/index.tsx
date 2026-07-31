import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
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
        allowAdding: true
    };
    const toolbarOptions: ToolbarItem[] = ['Add'];
    return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} toolbar={toolbarOptions} height='450px'>
        <Inject services={[Edit, Selection, Toolbar]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));