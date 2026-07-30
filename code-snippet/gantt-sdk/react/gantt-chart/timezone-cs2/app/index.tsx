import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Edit, Selection, ActionCompleteArgs, TaskFieldsModel, EditSettingsModel, TimelineSettingsModel } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {

  let ganttInstance = null;

  const taskSettings: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentID"
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const timelineSettings: TimelineSettingsModel = {
    timelineUnitSize: 65,
    topTier: { unit: "Day", format: "MMM dd, yyyy" },
    bottomTier: { unit: "Hour", format: "hh:mm a" }
  };

  const dayWorkingTime: object = [{ from: 0, to: 24 }];

  function actionComplete(args: ActionCompleteArgs) {
    if (args.action === "TaskbarEditing") {
      console.log(args.data.ganttProperties.startDate);
    }
  }

  return (
    <GanttComponent
      height="450px"
      dataSource={data}
      taskFields={taskSettings}
      editSettings={editSettings}
      dayWorkingTime={dayWorkingTime}
      timelineSettings={timelineSettings}
      timezone="America/New_York"
      durationUnit="Hour"
      dateFormat="hh:mm a"
      includeWeekend={true}
      actionComplete={actionComplete}
      ref={(g) => (ganttInstance = g)}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));