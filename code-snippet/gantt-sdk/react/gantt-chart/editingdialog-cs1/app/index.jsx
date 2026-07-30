
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data, editingResources } from './datasource';

function App() {
    let taskSettings = {
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
    let editDialogFields = [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ];
    let addDialogFields = [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' }
    ];
    let resourceFields = { id: 'resourceId', name: 'resourceName' };
    let resources = editingResources;
    let editSettings = {
        allowAdding: true,
        allowEditing: true,
        mode: 'Dialog',
        allowTaskbarEditing: true
    };
    let labelSettings = { leftLabel: 'TaskName', rightLabel: 'resources' };
    let toolbar = ['Add'];
    let projectStartDate = new Date('03/28/2019');
    let projectEndDate = new Date('04/14/2019');

    function actionComplete(args) {
        if (args.requestType === 'openEditDialog') {
            (args).element.ej2_instances[0].height = 500;
            const tab = document.getElementById('ganttGeneralTabContainer');
            if (tab) {
                tab.style.height = '300px';
            }
        }
    }

    return (
        <GanttComponent id="gantt" height="430px" dataSource={data} taskFields={taskSettings} editSettings={editSettings} editDialogFields={editDialogFields} addDialogFields={addDialogFields} resourceFields={resourceFields} resources={resources} toolbar={toolbar} labelSettings={labelSettings} projectStartDate={projectStartDate} projectEndDate={projectEndDate} actionComplete={actionComplete}>
            <Inject services={[Edit, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));