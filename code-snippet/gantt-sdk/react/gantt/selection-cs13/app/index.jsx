import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
function App() {
    let ganttInstance = null;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings = {
        mode: 'Both',
        type: 'Multiple'
    };
    const dropdownData = [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ];
    const valueChange = (args) => {
        if (ganttInstance) {
            ganttInstance.selectionSettings.mode = args.value;
        }
    };
    const clear = () => {
        if (ganttInstance) {
            ganttInstance.clearSelection();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <label style={{ fontWeight: 'bold' }}>Choose selection mode:</label>
                <DropDownListComponent
                    dataSource={dropdownData}
                    width={150}
                    index={0}
                    change={valueChange}
                />
                <ButtonComponent onClick={clear}>Clear Selection</ButtonComponent>
            </div>
            <GanttComponent
                id="ganttDefault"
                ref={(g) => (ganttInstance = g)}
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
            >
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));