import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, TaskFieldsModel, CalendarSettingsModel } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        calendarId: 'CalendarId'
    };
    const calendarSettings: CalendarSettingsModel = {
        projectCalendar: {
            workingTime: [{ from: 9, to: 17 }]
        },
        taskCalendars: [{
            calendarId: 'day-shift',
            workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            workingTime: [{ from: 9, to: 17 }],
            weekWorkingTime: [
                { dayOfWeek: 'Monday', timeRange: [{ from: 9, to: 12 }, { from: 13, to: 17 }] },
                { dayOfWeek: 'Friday', timeRange: [{ from: 9, to: 13 }] }
            ]
        }]
    };
    return (
        <GanttComponent
            dataSource={GanttData}
            height="450px"
            projectStartDate={new Date('04/06/2026')}
            projectEndDate={new Date('04/24/2026')}
            taskFields={taskFields}
            calendarSettings={calendarSettings}>
            <ColumnsDirective>
                <ColumnDirective field="TaskId" headerText="ID" width="80" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                <ColumnDirective field="StartDate" headerText="Start Date" />
                <ColumnDirective field="Duration" headerText="Duration" />
            </ColumnsDirective>
        </GanttComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
