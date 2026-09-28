import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    LabelSettingsModel,
    TaskFieldsModel,
    CalendarSettingsModel
} from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentId',
        calendarId: 'CalendarId'
    };
    const labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskName'
    };
    const calendarSettings: CalendarSettingsModel = {
        projectCalendar: {
            workingTime: [
                { from: 9, to: 17 }
            ]
        },
        taskCalendars: [
            {
                calendarId: 'day-shift',
                workingTime: [{ from: 9, to: 17 }],
                holidays: [],
                exceptions: [{ from: new Date('04/09/2026'), to: new Date('04/09/2026'), name: 'Team Meeting Day', isWorking: true, workingTime: [{ from: 10, to: 16 }] }]
            },
            {
                calendarId: 'night-shift',
                workingTime: [{ from: 17, to: 9 }],
                holidays: [],
                exceptions: [{ from: new Date('04/10/2026'), to: new Date('04/10/2026'), name: 'Maintenance Window', isWorking: true, workingTime: [{ from: 18, to: 8 }] }]
            }
        ]
    };

    return <GanttComponent dataSource={GanttData} height="450px" projectStartDate={new Date('04/01/2026')} projectEndDate={new Date('04/30/2026')} taskFields={taskFields} labelSettings={labelSettings} calendarSettings={calendarSettings}>
        <ColumnsDirective>
            <ColumnDirective field="TaskId" headerText="ID" width="80" />
            <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
            <ColumnDirective field="StartDate" headerText="Start Date" />
            <ColumnDirective field="Duration" headerText="Duration" />
        </ColumnsDirective>
        <Inject services={[]} />
    </GanttComponent>;
}

ReactDOM.render(<App />, document.getElementById('root'));
