import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GanttComponent,
  Inject,
  Sort,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-gantt";

import { data } from "./datasource";

function App() {

  let ganttInstance: GanttComponent | null = null;
  let message: string = "";

  const taskSettings = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };

  const splitterSettings = { columnIndex: 3 };

  function actionBegin(args: any): void {
    if (args.requestType === "sorting" && args.columnName === "TaskID") {
      message = `${args.requestType} action cancelled for ${args.columnName} column`;
      args.cancel = true;
      updateMessage();
    }
  }

  function actionComplete(args: any): void {
    if (args.requestType === "sorting" && args.columnName === "StartDate") {
      message = `${args.requestType} action cancelled for ${args.columnName} column`;
      updateMessage();
    }
  }

  function updateMessage() {
    const msgElement = document.getElementById("message");
    if (msgElement) msgElement.innerText = message;
  }

  return (
    <div>
      <div style={{ marginLeft: "100px" }}>
        <p id="message" style={{ color: "red" }}></p>
      </div>

      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        splitterSettings={splitterSettings}
        allowSorting={true}
        actionBegin={actionBegin}
        actionComplete={actionComplete}
        ref={g => ganttInstance = g}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="150" />
          <ColumnDirective field="Progress" headerText="Progress" width="150" />
        </ColumnsDirective>

        <Inject services={[Sort]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));