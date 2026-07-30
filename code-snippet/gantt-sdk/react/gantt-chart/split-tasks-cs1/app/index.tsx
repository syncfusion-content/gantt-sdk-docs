import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Edit,
    Toolbar,
    Selection,
    ContextMenu,
    TaskFieldsModel,
    EditSettingsModel
} from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';

function App() {

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    };

    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };

    const toolbarItems: string[] = [
        'Add', 'Edit', 'Update', 'Delete',
        'Cancel', 'ExpandAll', 'CollapseAll'
    ];

    return (
        <GanttComponent
            height="450px"
            dataSource={ganttData}
            taskFields={taskSettings}
            editSettings={editSettings}
            toolbar={toolbarItems}
            enableContextMenu={true}
        >
            <Inject services={[Edit, Toolbar, Selection, ContextMenu]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));