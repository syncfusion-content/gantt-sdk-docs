import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, RowDD, Inject, Edit, Toolbar, Selection, Resize } from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
    const taskSettings = {
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
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const columns = [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
    const toolbar = ['ExpandAll', 'CollapseAll'];
    const labelSettings = {
        rightLabel: 'resources',
        taskLabel: 'TaskName'
    };

    function queryTaskbarInfo(args) {
        const group = args.data.taskData.resourceGroup;
        if (typeof group === 'string') {
            if (group === 'Planning Team') {
                args.progressBarBgColor = 'red';
            } else if (group === 'Testing Team') {
                args.progressBarBgColor = 'green';
            }
        }
    }

    return (
        <GanttComponent
            dataSource={data}
            resources={resources}
            taskFields={taskSettings}
            resourceFields={resourceFields}
            editSettings={editSettings}
            columns={columns}
            toolbar={toolbar}
            labelSettings={labelSettings}
            allowSelection={true}
            allowResizing={true}
            highlightWeekends={true}
            treeColumnIndex={1}
            projectStartDate={new Date('03/25/2019')}
            projectEndDate={new Date('07/28/2019')}
            viewType='ResourceView'
            enableMultiTaskbar={true}
            height='450px'
            queryTaskbarInfo={queryTaskbarInfo}
        >
            <Inject services={[RowDD, Edit, Toolbar, Selection, Resize]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));