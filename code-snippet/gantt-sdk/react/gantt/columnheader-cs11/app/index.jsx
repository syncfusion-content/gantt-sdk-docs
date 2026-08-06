import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };
  let gantt;
  const splitterSettings = {
    position: "75%"
  }
  return (
    <div>
      <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" />
          <ColumnDirective field="TaskName" headerText="Task Name" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" headerText="Duration" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));