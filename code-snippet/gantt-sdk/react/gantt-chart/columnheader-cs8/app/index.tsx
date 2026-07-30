import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  let gantt: GanttComponent | null = null;

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };

  const customAttributes = { class: "orientationcss" };

  const setHeaderHeight = () => {
    const headerDiv = document.querySelector(".orientationcss > div") as HTMLElement | null;
    if (!headerDiv) return;

    const textWidth: number = headerDiv.scrollWidth;
    const headerCells: NodeListOf<HTMLElement> = document.querySelectorAll(".e-headercell");

    headerCells.forEach(cell => {
      cell.style.height = textWidth + "px";
    });
  };

  return (
    <div>
      <GanttComponent
        ref={g => (gantt = g)}
        dataSource={data}
        taskFields={taskFields}
        height="450px"
        created={setHeaderHeight}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" />
          <ColumnDirective field="TaskName" headerText="Task Name" />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" headerText="Duration" customAttributes={customAttributes} textAlign="Center"/>
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));