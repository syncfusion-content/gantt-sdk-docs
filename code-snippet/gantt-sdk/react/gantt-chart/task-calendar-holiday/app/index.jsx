import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    DayMarkers,
} from "@syncfusion/ej2-react-gantt";
import { GanttData } from "./datasource";

function App() {
    const taskFields = {
        id: "TaskId",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        parentID: "ParentId",
        calendarId: "CalendarId",
    };
    const labelSettings = {
        leftLabel: "TaskName",
    };
    const calendarSettings = {
        projectCalendar: {
            workingTime: [{ from: 9, to: 17 }],
            holidays: [
                {
                    from: new Date("04/10/2026"),
                    to: new Date("04/10/2026"),
                    label: "Regional Holiday",
                },
            ],
        },
        taskCalendars: [
            {
                calendarId: "local-team",
                holidays: [
                    {
                        from: new Date("04/05/2026"),
                        to: new Date("04/05/2026"),
                        label: "Local Holiday",
                    },
                ],
            },
            {
                calendarId: "offshore-team",
                holidays: [
                    {
                        from: new Date("04/08/2026"),
                        to: new Date("04/08/2026"),
                        label: "Offshore Holiday",
                    },
                ],
            },
        ],
    };
    return (
        <GanttComponent
            dataSource={GanttData}
            height="450px"
            projectStartDate={new Date("04/01/2026")}
            projectEndDate={new Date("04/30/2026")}
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
            <Inject services={[DayMarkers]} />
        </GanttComponent>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));