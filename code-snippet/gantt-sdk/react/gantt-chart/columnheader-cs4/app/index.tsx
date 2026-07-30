import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from "./datasource";

function App() {
  const taskFields: any = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };
  let gantt: GanttComponent | null;
  const dropDownData = [
    { text: 'Header', value: 'Header' },
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args: any) => {
    gantt.treeGrid.textWrapSettings.wrapMode = args.value;
    gantt.treeGrid.allowTextWrap = true;
  })
  return <div>
    <label style={{ padding: '30px 17px 0 0' }}>Autowrap for header column :</label>
    <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
    <div style={{ padding: '40px 0 0 0' }}></div>
    <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px">
      <ColumnsDirective>
        <ColumnDirective field="TaskName" headerText="Task Name"></ColumnDirective>
        <ColumnDirective field="StartDate" headerText="Start Date"></ColumnDirective>
        <ColumnDirective field="Duration" headerText="Duration"></ColumnDirective>
        <ColumnDirective field="Progress" headerText="Progress"></ColumnDirective>
      </ColumnsDirective>
    </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));