import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, ResourceFieldsModel, EditSettingsModel, LabelSettingsModel, RowDD, Inject, Edit, Toolbar, Selection, Resize, ActionBeginEventArgs } from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        parentID: 'ParentID'
    };
    const resourceFields: ResourceFieldsModel = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const toolbar: (string | object)[] = ['Add'];
    const labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskName'
    };
    function actionBegin(args: ActionBeginEventArgs) {
        if (args.requestType === 'beforeOpenAddDialog' || args.requestType === 'beforeOpenEditDialog') {
            args.Resources.columns[1].visible = false;
        }
    }
    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            resourceFields={resourceFields}
            resources={resources}
            labelSettings={labelSettings}
            toolbar={toolbar}
            editSettings={editSettings}
            actionBegin={actionBegin}
        >
            <Inject services={[RowDD, Edit, Toolbar, Selection, Resize]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));