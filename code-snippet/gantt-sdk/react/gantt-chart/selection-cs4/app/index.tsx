import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    GanttComponent,
    Selection,
    Inject
} from "@syncfusion/ej2-react-gantt";

import { CellSelectingEventArgs, CellSelectEventArgs, CellDeselectEventArgs } from "@syncfusion/ej2-react-grids";

import { data } from "./datasource";

function App() {

    const taskSettings: object = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };

    const selectionSettings: object = {
        mode: "Cell",
        type: "Single"
    };

    function updateMessage(text: string): void {
        const msgEl = document.getElementById("message");
        if (msgEl) {
            msgEl.innerText = text;
            msgEl.style.display = "block";
        }
    }

    function cellSelected(args: CellSelectEventArgs): void {
        updateMessage("Trigger cellSelected");
        (args.currentCell as HTMLElement).style.backgroundColor = "rgb(96, 158, 101)";
    }

    function cellSelecting(args: CellSelectingEventArgs): void {
        updateMessage("Trigger cellSelecting");

        const task: any = args.data;
        if (task.TaskName === "Perform Soil test") {
            args.cancel = true;
            updateMessage('Trigger cellSelecting - Selection canceled for "Perform Soil test"');
        }
    }

    function cellDeselected(args: CellDeselectEventArgs): void {
        updateMessage("Trigger cellDeselected");

        if (args.cells && args.cells.length > 0) {
            const cell = args.cells[0] as HTMLElement;
            cell.style.backgroundColor = "rgb(245, 69, 69)";
        }
    }

    function cellDeselecting(args: CellDeselectEventArgs): void {
        updateMessage("Trigger cellDeselecting");

        if (args.cells && args.cells.length > 0) {
            const cell = args.cells[0] as HTMLElement;
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