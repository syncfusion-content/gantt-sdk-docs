import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
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
  const splitterSettings = {
    position: "75%"
  };
  return <div><GanttComponent dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings} treeColumnIndex={1}>
  </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));