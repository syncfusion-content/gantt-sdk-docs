import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel, SplitterSettingsModel, SearchSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettingsModel = {
        columnIndex: 3
    };

    const searchSettings: SearchSettingsModel = {
        fields: ['TaskName'],
        operator: 'contains',
        key: 'Pröduct',
        ignoreCase: true,
        ignoreAccent: true
    };

    const toolbar = ['Search'];

    return (
        <GanttComponent
            dataSource={data}
            taskFields={taskFields}
            searchSettings={searchSettings}
            toolbar={toolbar}
            splitterSettings={splitterSettings}
            height="370px"
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>
            <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));