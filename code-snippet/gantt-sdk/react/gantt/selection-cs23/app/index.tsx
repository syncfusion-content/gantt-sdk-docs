import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Sort, Filter, TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple',
        persistSelection: true
    };
    const toggleColumnSelection = (args: ChangeEventArgs & { checked: boolean }): void => {
        if (ganttInstance) {
            ganttInstance.selectionSettings.persistSelection = args.checked;
        }
    };
    return (
        <div>
            <div style={{ padding: '20px 0px 20px 0px' }}>
                <label style={{ marginRight: '20px', fontWeight: 'bold' }}>
                    Enable/Disable persist selection
                </label>
                <SwitchComponent
                    id="switch"
                    checked={true}
                    change={toggleColumnSelection}
                />
            </div>
            <div style={{ padding: '20px 0px 0px 0px' }}>
                <GanttComponent
                    id="ganttDefault"
                    ref={(g) => (ganttInstance = g)}
                    height="370px"
                    dataSource={data}
                    allowFiltering={true}
                    allowSorting={true}
                    taskFields={taskSettings}
                    selectionSettings={selectionSettings}
                >
                    <Inject services={[Selection, Sort, Filter]} />
                </GanttComponent>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));