import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    DayMarkers,
    Selection,
    Inject,
    TaskFieldsModel,
    LabelSettingsModel,
    EventMarkerModel
} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate'
    };

    const labelSettings: LabelSettingsModel = {
        rightLabel: 'TaskName'
    };

    const eventMarkers: EventMarkerModel[] = [
        {
            day: new Date('01/16/2026'),
            label: 'Project approval and kick-off'
        }
    ];

    return (
        <GanttComponent
            height='450px'
            width='1000px'
            dataSource={data}
            taskFields={taskFields}
            labelSettings={labelSettings}
            eventMarkers={eventMarkers}
            renderBaseline={true}
        >
            <Inject services={[DayMarkers, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));