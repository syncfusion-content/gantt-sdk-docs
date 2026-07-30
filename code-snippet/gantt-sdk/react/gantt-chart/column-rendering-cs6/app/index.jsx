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

  const splitterSettings = { position: "75%" };

  const rowDataBound = (args) => {
    const row = args.row;
    if (row) {
      const rowIndex = parseInt(row.getAttribute("aria-rowindex") || "0", 10);
      const cells = row.querySelectorAll(".e-rowcell");
      if (cells.length > 0) {
        cells[0].textContent = rowIndex.toString();
      }
    }
  };

  return (
    <div>
      <GanttComponent
        dataSource={data}
        taskFields={taskFields}
        height="450px"
        splitterSettings={splitterSettings}
        rowDataBound={rowDataBound}
        treeColumnIndex={1}
      >
        <ColumnsDirective>
          <ColumnDirective field="SNo" headerText="S.No" width="100" />
          <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="StartDate" headerText="StartDate" width="120" textAlign="Right" />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));