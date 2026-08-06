import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Resize, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
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
  const splitterSettings = {
    position: "75%"
  };
  let ganttInstance;
  const alignmentData= [
    { text: "Normal", value: "Normal" },
    { text: "Auto", value: "Auto" },
  ];
  const changeValue = ((args) => {
    ganttInstance.treeGrid.grid.resizeSettings.mode = args.value;
  })
  return <div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <label style={{ paddingRight: '10px', fontWeight: 'bold' }}>Change the resize mode:</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="120px" change={changeValue} />
    <div style={{ padding: "40px 0 0 0" }}></div>
      </div>
    <GanttComponent ref={g => ganttInstance = g} dataSource={data} taskFields={taskFields} allowResizing={true} splitterSettings={splitterSettings} height="450px">
      <ColumnsDirective>
        <ColumnDirective field="TaskID" width="100"></ColumnDirective>
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" ></ColumnDirective>
        <ColumnDirective field="StartDate"></ColumnDirective>
        <ColumnDirective field="Duration"></ColumnDirective>
        <ColumnDirective field="Progress"></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Resize]} />
    </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));