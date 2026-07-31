import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Resize, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  let ganttInstance: GanttComponent | null = null;
  let messageRef: HTMLParagraphElement | null = null;

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };

  const splitterSettings = { position: "90%" };

  const updateMessage = (text: string) => {
    if (messageRef) {
      messageRef.textContent = text;
    }
  };

  const resizeStart = (args: any) => {
    updateMessage("resizeStart event triggered");
    if (args.column.field === "TaskID") {
      args.cancel = true;
      updateMessage("resizeStart event triggered and cancelled for TaskID");
    }
  };

  const resizeStop = (args: any) => {
    updateMessage("resizeStop event triggered");
    const headerCell = (ganttInstance as any).treeGrid.grid.getColumnHeaderByField(args.column.field);
    headerCell.classList.add("customcss");
    const columnCells = (ganttInstance as any).treeGrid.grid.getContentTable().querySelectorAll(`[aria-colindex="${args.column.index + 1}"]`);
    columnCells.forEach((cell: any) => {
      cell.style.backgroundColor = "rgb(43, 195, 226)";
    });
  };

  const resizing = () => {
    updateMessage("resizing event triggered");
  };

  return (
    <div>
      <div style={{ marginLeft: "180px" }}>
        <p style={{ color: "red" }} ref={el => (messageRef = el)}></p>
      </div>
      <GanttComponent
        ref={g => (ganttInstance = g)}
        dataSource={data}
        taskFields={taskFields}
        allowResizing={true}
        splitterSettings={splitterSettings}
        height="450px"
        resizeStart={resizeStart}
        resizeStop={resizeStop}
        resizing={resizing}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
          <ColumnDirective field="StartDate" />
          <ColumnDirective field="Duration" />
          <ColumnDirective field="Progress" />
        </ColumnsDirective>
        <Inject services={[Resize]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));