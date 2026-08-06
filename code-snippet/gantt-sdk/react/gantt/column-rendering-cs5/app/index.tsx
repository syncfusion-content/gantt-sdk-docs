import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { GanttData } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    duration: "Duration",
    progress: "Progress",
    parentID: "parentID",
    units: "Units",
    unitPrice: "UnitPrice"
  };

  const splitterSettings = { position: "75%" };

  const totalPrice = (field: string, data: any, column: object) => {
    return Number(data.units) * Number(data.unitPrice);
  };

  return (
    <div>
      <GanttComponent
        dataSource={GanttData}
        taskFields={taskFields}
        height="450px"
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="Units" headerText="Units" width="120" textAlign="Right" />
          <ColumnDirective field="UnitPrice" headerText="Unit Price" width="120" textAlign="Right" />
          <ColumnDirective field="TotalPrice" headerText="Total Price" width="120" format="c2" type="number" textAlign="Right" valueAccessor={totalPrice} />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));