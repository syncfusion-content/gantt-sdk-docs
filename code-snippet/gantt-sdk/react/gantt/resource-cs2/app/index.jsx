import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        parentID: 'ParentID'
    };

    const labelSettings = {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    };

    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    };

    const columns = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Duration', width: '100' }
    ];

    const projectStartDate = new Date('03/25/2019');
    const projectEndDate = new Date('07/28/2019');

    const resources = [
        { resourceId: 1, resourceName: 'Martin Tamer' },
        { resourceId: 2, resourceName: 'Rose Fuller' },
        { resourceId: 3, resourceName: 'Margaret Buchanan' },
        { resourceId: 4, resourceName: 'Fuller King' },
        { resourceId: 5, resourceName: 'Davolio Fuller' },
        { resourceId: 6, resourceName: 'Van Jack' },
        { resourceId: 7, resourceName: 'Fuller Buchanan' },
        { resourceId: 8, resourceName: 'Jack Davolio' },
        { resourceId: 9, resourceName: 'Tamer Vinet' },
        { resourceId: 10, resourceName: 'Vinet Fuller' },
        { resourceId: 11, resourceName: 'Bergs Anton' },
        { resourceId: 12, resourceName: 'Construction Supervisor' }
    ];

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            treeColumnIndex={1}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            labelSettings={labelSettings}
            resourceFields={resourceFields}
            resources={resources}
            columns={columns}
        >
            <Inject services={[Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));