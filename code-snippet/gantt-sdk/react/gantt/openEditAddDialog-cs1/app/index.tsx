import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    EditSettingsModel,
    Inject,
    Toolbar,
    Edit,
    Selection,
    TaskFieldsModel,
    EditDialogFieldsModel
} from '@syncfusion/ej2-react-gantt';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { editingData, editingResources } from './datasource';

function App() {

    let ganttInstance: any = null;
    const data: object[] = editingData;
    const taskSettings: TaskFieldsModel = {
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

    const editDialogFields: EditDialogFieldsModel[] = [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ];

    const resourceNameMapping: string = 'resourceName';
    const resourceIdMapping: string = 'resourceId';
    const resources: object[] = editingResources;

    const editSettings: EditSettingsModel = {
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