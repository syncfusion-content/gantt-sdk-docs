import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Resize, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
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
  let dropDown;
  let textBox;
  const field = { text: "text", value: "value" };
  const alignmentData = [
    { text: "TaskID", value: "TaskID" },
    { text: "TaskName", value: "TaskName" },
    { text: "StartDate", value: "StartDate" },
    { text: "Duration", value: "Duration" },
    { text: "Progress", value: "Progress" },
  ];

  const onExternalResize = (() => {
    const colsWidth = ganttInstance.treeGrid.grid.getColumnByField(dropDown.value);
    colsWidth.width = textBox.value;
    ganttInstance.treeGrid.grid.refreshColumns();
  })
  return <div>
    <label style={{ padding: "10px 10px 26px 0" }}>Change the resize mode:</label>
    <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br />
    <label style={{ padding: "30px 17px 0 0" }}>Enter the width:</label>
    <TextBoxComponent ref={t => textBox = t} placeholder="Enter the width" width="200" /><br />
    <label style={{ padding: "30px 17px 0 0" }}>Click the change button :</label>
    <ButtonComponent id="button" cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
    <div style={{ padding: "40px 0 0 0" }}></div>
    <GanttComponent dataSource={data} ref={g => ganttInstance = g} taskFields={taskFields}
      allowResizing={true} splitterSettings={splitterSettings} height="450px">
      <ColumnsDirective>
        <ColumnDirective field="TaskID" width="100" allowResizing={false}></ColumnDirective>
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" ></ColumnDirective>
        <ColumnDirective field="StartDate"></ColumnDirective>
        <ColumnDirective field="Duration"></ColumnDirective>
        <ColumnDirective field="Progress"></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Resize]} />
    </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));