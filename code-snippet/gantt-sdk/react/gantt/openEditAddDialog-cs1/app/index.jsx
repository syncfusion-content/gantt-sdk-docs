import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Toolbar,
    Edit,
    Selection,
} from '@syncfusion/ej2-react-gantt';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { editingData, editingResources } from './datasource';

function App() {

    let ganttInstance = null;
    const data = editingData;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        notes: 'info',
        resourceInfo: 'resources'
    };

    const editDialogFields = [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ];

    const resourceNameMapping = 'resourceName';
    const resourceIdMapping = 'resourceId';
    const resources = editingResources;

    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    };

    function edit() {
        ganttInstance.editModule.dialogModule.openEditDialog(ganttInstance.selectedRowIndex);
    }

    function add() {
        ganttInstance.editModule.dialogModule.openAddDialog();
    }

    return (
        <div>
            <ButtonComponent id="editDialog" onClick={edit}>Edit Dialog</ButtonComponent>
            <ButtonComponent id="addDialog" onClick={add}>Add Dialog</ButtonComponent>

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                editDialogFields={editDialogFields}
                editSettings={editSettings}
                resourceNameMapping={resourceNameMapping}
                resourceIDMapping={resourceIdMapping}
                resources={resources}
                ref={(g) => { ganttInstance = g; }}
            >
                <Inject services={[Edit, Selection, Toolbar]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));