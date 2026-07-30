import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Sort } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {

  let currentSortOrder = "Ascending";

  const taskSettings = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };

  const columns = [
    { field: "TaskID", headerText: "Task ID", textAlign: "Left", width: "120" },
    {
      field: "TaskName",
      headerText: "Task Name",
      width: "250",
      sortComparer: customSortComparer
    },
    { field: "StartDate", headerText: "Start Date", width: "150" },
    { field: "Duration", headerText: "Duration", width: "150" },
    { field: "Progress", headerText: "Progress", width: "150" }
  ];

  const splitterSettings = { columnIndex: 3 };

  function actionBegin(args) {
    if (args.requestType === "sorting") {
      currentSortOrder = args.direction;
    }
  }

  // Custom comparer with null handling and dynamic sort order.
  function customSortComparer(reference, comparer) {
    const sortAsc = currentSortOrder === "Ascending";

    if (reference === null && comparer === null) return 0;
    if (reference === null) return 1;
    if (comparer === null) return -1;

    if (reference < comparer) return sortAsc ? -1 : 1;
    if (reference > comparer) return sortAsc ? 1 : -1;

    return 0;
  }

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      columns={columns}
      splitterSettings={splitterSettings}
      allowSorting={true}
      actionBegin={actionBegin}
    >
      <Inject services={[Sort]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));