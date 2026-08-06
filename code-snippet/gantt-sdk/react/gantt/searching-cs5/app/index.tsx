import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
import { TaskFieldsModel, SplitterSettingsModel, SearchSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {

    let ganttInstance: GanttComponent | null = null;

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

    const toolbar = ['Search'];

    const searchSettings: SearchSettingsModel = {
        fields: ['TaskName'],
        operator: 'contains',
        key: 'Perform',
        ignoreCase: true
    };

    function clearSearch(): void {
        if (ganttInstance) {
            ganttInstance.searchSettings.key = '';
        }
    }

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <ButtonComponent onClick={clearSearch}>Clear Search</ButtonComponent>
            </div>
            <GanttComponent
                ref={(g) => ganttInstance = g}
                dataSource={data}
                taskFields={taskFields}
                searchSettings={searchSettings}
                toolbar={toolbar}
                splitterSettings={splitterSettings}
                height="370px"
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="400" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>
                <Inject services={[Filter, Toolbar]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));