import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Resize, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
function App(){
    const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
  };
  const splitterSettings = {
      columnIndex: 6
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        splitterSettings={splitterSettings} allowResizing={true} height = "450px">
            <ColumnsDirective>
                <ColumnDirective field="TaskID" width="100" ></ColumnDirective>
                <ColumnDirective field="TaskName" headerText="Task Name" minWidth="200" width="250" maxWidth="300"></ColumnDirective>
                <ColumnDirective field="StartDate"></ColumnDirective>
                <ColumnDirective field="Duration" minWidth="100" maxWidth="200"></ColumnDirective>
                <ColumnDirective field="Predecessor"></ColumnDirective>
                <ColumnDirective field="Progress"></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Resize]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById("root"));