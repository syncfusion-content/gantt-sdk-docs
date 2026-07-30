import * as React from "react";
import { getValue } from '@syncfusion/ej2-base';
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
  const splitterSettings = {
    position: "75%"
  };
  const concatenateFields = (field: string, data: object, ) => {
    return data[field] + '-' + getValue('TaskID', data);
  };
  const percentageFormatter = (field: string, data: object, ) => {
    return data[field] + '%';

  };
  return <div><GanttComponent dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings}>
    <ColumnsDirective>
      <ColumnDirective field="TaskID" > </ColumnDirective>
      <ColumnDirective field="TaskName" headerText="Task Name" width="180" valueAccessor={concatenateFields} > </ColumnDirective>
      <ColumnDirective field="StartDate" headerText="Start Date" width="180" > </ColumnDirective>
      <ColumnDirective field="Duration" headerText="Duration" width="100" > </ColumnDirective>
      <ColumnDirective field="Progress" headerText="Progress" width="120" valueAccessor={percentageFormatter} > </ColumnDirective>
    </ColumnsDirective>
  </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));