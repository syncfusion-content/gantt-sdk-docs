import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { GanttData } from "./datasource";

function App() {
  let ganttInstance: GanttComponent | null;

  const updateProperties = (): void => {
    const daysPerWeek = parseInt(
      (document.getElementById("daysPerWeek") as HTMLInputElement).value,
      10,
    );
    const daysPerMonth = parseInt(
      (document.getElementById("daysPerMonth") as HTMLInputElement).value,
      10,
    );

    if (daysPerWeek < 1 || daysPerWeek > 7) {
      alert("Days per Week must be between 1 and 7");
      return;
    }

    if (daysPerMonth < 1 || daysPerMonth > 31) {
      alert("Days per Month must be between 1 and 31");
      return;
    }

    if (ganttInstance) {
      ganttInstance.daysPerWeek = daysPerWeek;
      ganttInstance.daysPerMonth = daysPerMonth;
    }
  };

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    durationUnit: "DurationUnit",
    parentID: "ParentID",
  };

  const splitterSettings = {
    columnIndex: 4,
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>Days Per Week: </label>
        <input
          id="daysPerWeek"
          type="number"
          defaultValue={5}
          min={1}
          max={7}
        />

        <label style={{ marginLeft: "10px" }}>Days Per Month: </label>
        <input
          id="daysPerMonth"
          type="number"
          defaultValue={20}
          min={1}
          max={31}
        />

        <ButtonComponent
          id="updateButton"
          onClick={updateProperties}
          style={{ marginLeft: "10px" }}
        >
          Update
        </ButtonComponent>
      </div>

      <GanttComponent
        ref={(gantt) => (ganttInstance = gantt)}
        dataSource={GanttData}
        height="380px"
        daysPerWeek={5}
        daysPerMonth={20}
        taskFields={taskFields}
        splitterSettings={splitterSettings}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
