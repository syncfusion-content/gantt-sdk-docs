import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject
} from "@syncfusion/ej2-react-gantt";
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

  let gantt;

  const onDataBound = () => {
    if (!gantt) return;

    // Style by index
    const headerByIndex = gantt.treeGrid.getColumnHeaderByIndex(0);
    if (headerByIndex) headerByIndex.style.color = "#0d0b0b";

    // Style by field
    const taskNameHeader = gantt.treeGrid.getColumnHeaderByField("TaskName");
    if (taskNameHeader) {
      taskNameHeader.style.backgroundColor = "#f45ddeab";
      taskNameHeader.style.color = "#0d0b0b";
    }

    // Style by UID
    const headerByUid = gantt.treeGrid.getColumnHeaderByUid("grid-column3");
    if (headerByUid) {
      headerByUid.style.backgroundColor = "#f45ddeab";
      headerByUid.style.color = "#0d0b0b";
    }

    // Style by field index
    const durationIndex = gantt.treeGrid.getColumnIndexByField("Duration");
    const durationHeader = gantt.treeGrid.getColumnHeaderByIndex(durationIndex);
    if (durationHeader) durationHeader.style.color = "#0d0b0b";

    // Style by UID index
    const uidIndex = gantt.treeGrid.getColumnIndexByUid("grid-column4");
    const uidHeader = gantt.treeGrid.getColumnHeaderByIndex(uidIndex);
    if (uidHeader) uidHeader.style.color = "#0d0b0b";
  };

  return (
    <div>
      <GanttComponent
        ref={g => gantt = g}
        dataSource={data}
        taskFields={taskFields}
        height="450px"
        dataBound={onDataBound}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" />
          <ColumnDirective field="TaskName" headerText="Task Name" />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" headerText="Duration" />
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));