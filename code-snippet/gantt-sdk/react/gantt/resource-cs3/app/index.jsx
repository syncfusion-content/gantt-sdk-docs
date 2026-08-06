import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Resize,
    Selection
} from '@syncfusion/ej2-react-gantt';

import { data, projectResources } from './datasource';

function App() {

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        columnIndex: 2
    };

    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };

    function getResourceStyle(name) {
        switch (name) {
            case 'Martin Tamer': return { display: 'flex', padding: '1.5px 12px', gap: '10px', width: '81px', height: '24px', borderRadius: '24px', background: '#DFECFF' };
            case 'Rose Fuller': return { display: 'flex', padding: '1.5px 12px', gap: '10px', width: '71px', height: '24px', borderRadius: '24px', background: '#E4E4E7' };
            case 'Margaret Buchanan': return { display: 'flex', padding: '1.5px 12px', gap: '10px', width: '123px', height: '24px', borderRadius: '24px', background: '#DFFFE2' };
            case 'Tamer Vinet': return { display: 'flex', padding: '1.5px 12px', gap: '10px', width: '75px', height: '24px', borderRadius: '24px', background: '#FFEBE9' };
            default: return {};
        }
    }

    function getResourceTextStyle(name) {
        switch (name) {
            case 'Martin Tamer': return { width: '72px', height: '22px', fontWeight: 500, fontSize: '14px', lineHeight: '22px', textAlign: 'center', color: '#006AA6' };
            case 'Rose Fuller': return { width: '72px', height: '22px', fontWeight: 500, fontSize: '14px', lineHeight: '22px', textAlign: 'center', color: '#766B7C' };
            case 'Margaret Buchanan': return { width: '72px', height: '22px', fontWeight: 500, fontSize: '14px', lineHeight: '22px', textAlign: 'center', color: '#00A653' };
            case 'Tamer Vinet': return { width: '72px', height: '22px', fontWeight: 500, fontSize: '14px', lineHeight: '22px', textAlign: 'center', color: '#FF3740' };
            default: return {};
        }
    }

    function resourceTemplate(props) {
        const names = props.ganttProperties.resourceNames;
        if (!names) return null;

        return (
            <div style={getResourceStyle(names)}>
                <div style={getResourceTextStyle(names)}>
                    {names}
                </div>
            </div>
        );
    }

    function queryTaskbarInfo(args) {
        const name = args.data.ganttProperties.resourceNames;
        if (!name) return;

        if (name === 'Martin Tamer') {
            args.taskbarBgColor = '#DFECFF';
            args.progressBarBgColor = '#006AA6';
        } else if (name === 'Rose Fuller') {
            args.taskbarBgColor = '#E4E4E7';
            args.progressBarBgColor = '#766B7C';
        } else if (name === 'Margaret Buchanan') {
            args.taskbarBgColor = '#DFFFE2';
            args.progressBarBgColor = '#00A653';
        } else if (name === 'Tamer Vinet') {
            args.taskbarBgColor = '#FFEBE9';
            args.progressBarBgColor = '#FF3740';
        }
    }

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            allowResizing={true}
            rowHeight={50}
            splitterSettings={splitterSettings}
            resourceFields={resourceFields}
            resources={projectResources}
            queryTaskbarInfo={queryTaskbarInfo}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskName" headerText="Task Name" width={270} />
                <ColumnDirective field="resources" headerText="Resources" width={175} template={resourceTemplate} />
                <ColumnDirective field="StartDate" headerText="Start Date" width={150} />
                <ColumnDirective field="Duration" headerText="Duration" width={150} />
                <ColumnDirective field="Progress" headerText="Progress" width={150} />
            </ColumnsDirective>
            <Inject services={[Resize, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));