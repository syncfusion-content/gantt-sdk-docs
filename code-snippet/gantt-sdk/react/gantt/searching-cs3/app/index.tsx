import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
import { TaskFieldsModel, SplitterSettingsModel, SearchSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {

    let ganttInstance: GanttComponent | null = null;
    let searchInput: TextBoxComponent | null = null;

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

    const searchSettings: SearchSettingsModel = {};

    const toolbar: any = ['Search'];

    function search(): void {
        if (ganttInstance && searchInput) {
            const value: string = String(searchInput.value || '');
            ganttInstance.search(value);
        }
    }

    function clearWhenEmpty(args: ChangeEventArgs): void {
        if (ganttInstance && (!args.value || args.value.toString() === '')) {
            ganttInstance.search('');
        }
    }

    return (
        <div>
            <div style={{ marginBottom: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
                <TextBoxComponent
                    width="200"
                    placeholder="Search text"
                    showClearButton={true}
                    change={clearWhenEmpty}
                    ref={(t) => searchInput = t}
                />
                <ButtonComponent onClick={search}>Search</ButtonComponent>
            </div>

            <GanttComponent
                ref={(g) => ganttInstance = g}
                dataSource={data}
                taskFields={taskFields}
                toolbar={toolbar}
                splitterSettings={splitterSettings}
                searchSettings={searchSettings}
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