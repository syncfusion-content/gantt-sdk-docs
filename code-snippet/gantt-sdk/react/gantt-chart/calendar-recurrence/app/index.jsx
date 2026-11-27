import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject
} from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentId',
        calendarId: 'CalendarId'
    };

    const labelSettings = {
        leftLabel: 'TaskName'
    };

    const calendarSettings = {
        projectCalendar: { workingTime: [{ from: 8, to: 17 }] },
        taskCalendars: [
            {
                calendarId: 'regional',
                workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                workingTime: [{ from: 9, to: 12 }, { from: 13, to: 17 }],
                holidays: [{
                    from: new Date('04/10/2026'),
                    to: new Date('04/10/2026'),
                    label: 'Regional closure',
                    recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 10, count: 3 }
                }],
                exceptions: [{
                    from: new Date('04/17/2026'),
                    to: new Date('04/17/2026'),
                    label: 'Partial working day',
                    exceptionWorkingTime: [{ from: 9, to: 12 }],
                    recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 17, until: new Date('06/17/2026') }
                }]
            }
        ]
    };

    return (
        <GanttComponent
            dataSource={GanttData}
            height="450px"
            projectStartDate={new Date('04/01/2026')}
            projectEndDate={new Date('06/30/2026')}
            taskFields={taskFields}
            labelSettings={labelSettings}
            calendarSettings={calendarSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskId" headerText="ID" width="80" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                <ColumnDirective field="StartDate" headerText="Start Date" />
                <ColumnDirective field="Duration" headerText="Duration" />
            </ColumnsDirective>
            <Inject services={[]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
