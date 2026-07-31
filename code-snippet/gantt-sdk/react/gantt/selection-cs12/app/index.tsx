import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;
    const taskFields: TaskFieldsModel = {
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
        enableToggle: true
    };
    const valueChange = (args: ChangeEventArgs): void => {
        if (ganttInstance) {
            ganttInstance.selectionSettings.mode = args.value as 'Row' | 'Cell' | 'Both';
        }
    };
    const toggleColumnSelection = (args: any): void => {
        if (ganttInstance) {
            ganttInstance.selectionSettings.enableToggle = args.checked;
        }
    };
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center',gap: '10px'}}>
                <label style={{ padding: '30px 17px 0 0', fontWeight: 'bold' }}>
                    Choose selection mode:
                </label>
                <DropDownListComponent
                    dataSource={['Row', 'Cell', 'Both']}
                    width={150}
                    index={0}
                    change={valueChange}
                />
            </div>
            <div style={{ padding: '20px 0px 20px 0px' }}>
                <label style={{ marginRight: '20px', fontWeight: 'bold' }}>
                    Enable/Disable toggle selection
                </label>
                <SwitchComponent
                    id="switch"
                    checked={true}
                    change={toggleColumnSelection}
                />
            </div>
            <div style={{ padding: '20px 0 0 0' }}>
                <GanttComponent
                    id="ganttDefault"
                    ref={(g: GanttComponent) => (ganttInstance = g)}
                    height="380px"
                    dataSource={data}
                    taskFields={taskFields}
                    selectionSettings={selectionSettings}>
                    <Inject services={[Selection]} />
                </GanttComponent>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));