import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Edit, Selection } from "@syncfusion/ej2-react-gantt";
import { GanttData } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress"
  };
  const selectionSettings = {
    mode: "Row",
    type: "Multiple"
  };
  const editSettings = {
    allowAdding: true
  };

  return (
    <GanttComponent
      dataSource={GanttData}
      height="450px"
      allowTaskCopyPaste={true}
      allowSelection={true}
      taskFields={taskFields}
      columns={[
        { field: "TaskID", headerText: "Task ID", width: 90 },
        { field: "TaskName", headerText: "Task Name", width: 200 },
        { field: "StartDate", headerText: "Start Date", width: 130 },
        { field: "Duration", headerText: "Duration", width: 110 },
        { field: "Progress", headerText: "Progress", width: 120 }
      ]}
      selectionSettings={selectionSettings}
      editSettings={editSettings}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
