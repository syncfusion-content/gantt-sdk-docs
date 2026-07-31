import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection, TaskFieldsModel } from "@syncfusion/ej2-react-gantt";
import { taskData } from "./datasource";

function App() {
  let ganttInstance: GanttComponent | null = null;
  const taskSettings: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };
  function change(): void {
    ganttInstance!.updateProjectDates(
      new Date("04/10/2019"),
      new Date("06/20/2019"),
      true
    );
  }
  return (
    <div>
      <button id="changedate" onClick={change}>Change Date</button>
      <br /><br />
      <GanttComponent
        height="430px"
        dataSource={taskData}
        taskFields={taskSettings}
        ref={(g) => (ganttInstance = g)}
      >
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));