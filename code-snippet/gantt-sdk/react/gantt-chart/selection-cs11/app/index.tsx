import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SelectionSettingsModel, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';
function App() {
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
        mode: 'Row'
    };
    const dropdownData: Object[] = [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ];
    let ganttInstance: any;
    function valueChange(args: ChangeEventArgs): void {
        ganttInstance.selectionSettings.mode = args.value as any;
    }
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label style={{ fontWeight: 'bold' }}>
                    Choose selection mode:
                </label>
                <DropDownListComponent
                    width="200"
                    index={0}
                    dataSource={dropdownData}
                    change={valueChange}
                />
            </div>
            <div style={{ padding: '10px 0 0 0' }}>
                <GanttComponent
                    id="ganttDefault"
                    ref={(g: GanttComponent) => ganttInstance = g}
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