import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, ColumnModel } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
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
  let gantt: GanttComponent | null = null;

  const headerTextMap: { [key: string]: string } = {
    TaskID: 'ID',
    TaskName: 'Name',
    StartDate: 'Start Date',
    Duration: 'Task Duration',
    Progress: 'Task Progress'
  };

  const changeHeaderText = () => {
    if (gantt) {
      gantt.treeGrid.grid.columns.forEach((column: ColumnModel) => {
        column.headerText = headerTextMap[column.field as string];
      });
      gantt.treeGrid.grid.refreshHeader();
    }
  };

  return (
    <div>
      <ButtonComponent id="button" style={{ marginBottom: "5px" }} cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
        <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px">
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