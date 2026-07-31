import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GanttComponent,
  Inject,
  Selection,
  TaskFieldsModel,
  SelectionSettingsModel
} from "@syncfusion/ej2-react-gantt";

import { data } from "./datasource";

function App() {

  const taskSettings: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentID"
  };

  const selectionSettings: SelectionSettingsModel = {
    mode: "Cell",
    type: "Multiple"
  };

  return (
    <GanttComponent
      height="370px"
      dataSource={data}
      taskFields={taskSettings}
      selectionSettings={selectionSettings}
    >
      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));