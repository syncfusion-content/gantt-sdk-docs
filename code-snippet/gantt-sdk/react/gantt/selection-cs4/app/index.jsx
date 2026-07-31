import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    GanttComponent,
    Selection,
    Inject
} from "@syncfusion/ej2-react-gantt";


import { data } from "./datasource";

function App() {

    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };

    const selectionSettings = {
        mode: "Cell",
        type: "Single"
    };

    function updateMessage(text) {
        const msgEl = document.getElementById("message");
        if (msgEl) {
            msgEl.innerText = text;
            msgEl.style.display = "block";
        }
    }

    function cellSelected(args) {
        updateMessage("Trigger cellSelected");
        (args.currentCell).style.backgroundColor = "rgb(96, 158, 101)";
    }

    function cellSelecting(args) {
        updateMessage("Trigger cellSelecting");

        const task = args.data;
        if (task.TaskName === "Perform Soil test") {
            args.cancel = true;
            updateMessage('Trigger cellSelecting - Selection canceled for "Perform Soil test"');
        }
    }

    function cellDeselected(args) {
        updateMessage("Trigger cellDeselected");

        if (args.cells && args.cells.length > 0) {
            const cell = args.cells[0];
            cell.style.backgroundColor = "rgb(245, 69, 69)";
        }
    }

    function cellDeselecting(args) {
        updateMessage("Trigger cellDeselecting");

        if (args.cells && args.cells.length > 0) {
            const cell = args.cells[0];
            cell.style.color = "rgb(253, 253, 253)";
        }
    }

    return (
        <div>
            <p id="message" style={{ display: "none", fontWeight: "bold" }}></p>
            <GanttComponent
                height="370px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
                enableHover={false}
                cellSelected={cellSelected}
                cellSelecting={cellSelecting}
                cellDeselected={cellDeselected}
                cellDeselecting={cellDeselecting}
            >
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));