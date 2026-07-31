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
  return <div><GanttComponent dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings}>
    <ColumnsDirective>
      <ColumnDirective field="TaskID" > </ColumnDirective>
      <ColumnDirective field="TaskName" headerText="Task Name" width="180" > </ColumnDirective>
      <ColumnDirective field="StartDate" headerText="Start Date" width="180" > </ColumnDirective>
      <ColumnDirective field="Duration" headerText="Duration" width="100" > </ColumnDirective>
      <ColumnDirective field="Progress" headerText="Progress" width="120" > </ColumnDirective>
    </ColumnsDirective>
  </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));