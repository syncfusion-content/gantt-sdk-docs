import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GanttComponent,
  Inject,
  Selection
} from "@syncfusion/ej2-react-gantt";

import { data } from "./datasource";

function App() {

  const taskSettings = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentID"
  };

  const selectionSettings = {
    mode: "Cell",
    type: "Single"
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