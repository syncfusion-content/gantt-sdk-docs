import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
import { data } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };

  let toolTip: TooltipComponent | null;
  let gantt: GanttComponent | null;

  const columnDescriptions: Record<string, string> = {
    "Task ID": "Unique identifier for the task.",
    "Task Name": "Name of the task.",
    "Start Date": "The date when the task starts.",
    "Duration": "Number of days the task will take.",
    "Progress": "Completion percentage of the task."
  };

  const beforeRender = (args: TooltipEventArgs) => {
    const headerText = (args as any).target.innerText;
    const description = columnDescriptions[headerText];
    if (description) {
      (toolTip as TooltipComponent).content = `${headerText}: ${description}`;
    }
  };

  return (
    <div>
      <TooltipComponent ref={t => toolTip = t} beforeRender={beforeRender} target=".e-headertext">
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
      </TooltipComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));