import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, TaskFieldsModel, TimelineSettingsModel } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  let ganttInstance: GanttComponent = null;

  const taskSettings: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentID"
  };

  const timelineSettings: TimelineSettingsModel = {
    timelineUnitSize: 65,
    topTier: { unit: "Day", format: "MMM dd, yyyy" },
    bottomTier: { unit: "Hour", format: "hh:mm a" }
  };
  
  const dayWorkingTime: object = [{ from: 0, to: 24 }];

  return (
    <GanttComponent
      id="ganttDefault"
      height="450px"
      dataSource={data}
      taskFields={taskSettings}
      timelineSettings={timelineSettings}
      dayWorkingTime={dayWorkingTime}
      timezone="UTC"
      durationUnit="Hour"
      dateFormat="hh:mm a"
      includeWeekend={true}
      ref={(g) => (ganttInstance = g)}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>

      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));