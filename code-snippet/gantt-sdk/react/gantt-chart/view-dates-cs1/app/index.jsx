import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };
  const timelineSettings = {
    viewStartDate: new Date("04/03/2019"),
    viewEndDate: new Date("04/07/2019")
  };
  const projectStartDate = new Date("03/31/2019");
  const projectEndDate = new Date("04/13/2019");
  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      timelineSettings={timelineSettings}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
    >
      <Inject services={[]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));