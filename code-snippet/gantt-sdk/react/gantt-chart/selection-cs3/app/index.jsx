import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    GanttComponent,
    Inject,
    Selection
} from "@syncfusion/ej2-react-gantt";

import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { data } from "./datasource";

function App() {

    let ganttInstance = null;
    let rowTextBox = null;
    let cellTextBox = null;

    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };

    const selectionSettings = {
        mode: "Cell",
        type: "Single"
    };

    function selectCell() {
        const rowIndex = parseInt(rowTextBox.element.value, 10);
        const cellIndex = parseInt(cellTextBox.element.value, 10);

        if (!isNaN(rowIndex) && !isNaN(cellIndex) && ganttInstance) {
            ganttInstance.selectCell({ rowIndex, cellIndex });
        }
    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <label style={{ fontWeight: "bold" }}>Enter the row index:</label>
                <TextBoxComponent width="100" ref={(t) => (rowTextBox = t)} />

                <label style={{ fontWeight: "bold" }}>Enter the cell index:</label>
                <TextBoxComponent width="100" ref={(t) => (cellTextBox = t)} />

                <ButtonComponent onClick={selectCell}>Select Cell</ButtonComponent>
            </div>

            <GanttComponent
                height="370px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
                ref={(g) => (ganttInstance = g)}
            >
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));