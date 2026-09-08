import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
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
        parentID: 'ParentId'
    };

    const labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskName'
    };

    const calendarSettings: CalendarSettingsModel = {
        projectCalendar: {
            workingTime: [
                { from: 9, to: 12 },
                { from: 13, to: 17 }
            ],
            exceptions: [
                {
                    from: new Date('04/06/2026'),
                    to: new Date('04/06/2026'),
                    name: 'Extended Working Day',
                    isWorking: true,
                    workingTime: [
                        { from: 8, to: 18 }
                    ]
                }
            ]
        }
    };

    return (
        <GanttComponent
            dataSource={GanttData}
            height="450px"
            projectStartDate={new Date('04/01/2026')}
            projectEndDate={new Date('04/30/2026')}
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
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));