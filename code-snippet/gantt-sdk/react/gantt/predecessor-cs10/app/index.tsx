import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, HolidayModel, ColumnModel, EditSettingsModel, EventMarkerModel } from '@syncfusion/ej2-react-gantt';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {

    let ganttObj: GanttComponent;

    function onToggleChange(args: any) {
        if (ganttObj) {
            ganttObj.autoUpdatePredecessorOffset = args.checked;
        }
    }

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const columns: ColumnModel = [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'Predecessor', headerText: 'Dependency', width: '150' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ];

    const holidays: HolidayModel = [
        {
            from: '04/04/2019',
            to: '04/05/2019',
            label: 'Public holidays',
            cssClass: 'e-custom-holiday'
        },
        {
            from: '04/12/2019',
            to: '04/12/2019',
            label: 'Public holiday',
            cssClass: 'e-custom-holiday'
        }
    ];

    const eventMarkers: EventMarkerModel = [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        }
    ];

    return (
        <div>
            <div className="switch-container">
                <label>Auto Update Predecessor Offset</label>
                <SwitchComponent
                    checked={true}
                    change={onToggleChange}
                />
            </div>

            <GanttComponent
                id="Default"
                dataSource={data}
                height="420px"
                taskFields={taskFields}
                editSettings={editSettings}
                columns={columns}
                holidays={holidays}
                eventMarkers={eventMarkers}
                autoUpdatePredecessorOffset={true}
                ref={(g) => { ganttObj = g; }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));