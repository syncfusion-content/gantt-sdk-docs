import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection } from "@syncfusion/ej2-react-gantt";
import { DropDownListComponent} from "@syncfusion/ej2-react-dropdowns";
import { data } from "./datasource";

function App() {

    let ganttInstance = null;

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
        type: "Multiple",
        cellSelectionMode: "Flow"
    };

    const modeOptions = [
        { text: "Cell", value: "Cell" },
        { text: "Row", value: "Row" },
        { text: "Both", value: "Both" }
    ];

    const cellModeOptions = [
        { text: "Flow", value: "Flow" },
        { text: "Box", value: "Box" },
        { text: "BoxWithBorder", value: "BoxWithBorder" }
    ];

    function selectionModeChange(args) {
        if (ganttInstance) {
            ganttInstance.treeGrid.grid.selectionSettings.mode = args.value;
            ganttInstance.treeGrid.grid.refresh();
        }
    }

    function cellSelectionModeChange(args) {
        if (ganttInstance) {
            ganttInstance.treeGrid.grid.selectionSettings.cellSelectionMode = args.value;
        }
    }

    return (
        <div>
            <div style={{ display: "flex", gap: 20, paddingBottom: 20 }}>
                <div>
                    <label style={{ fontWeight: "bold" }}>Select Mode:</label>
                    <DropDownListComponent
                        width="150"
                        dataSource={modeOptions}
                        index={0}
                        change={selectionModeChange}
                    />
                </div>

                <div>
                    <label style={{ fontWeight: "bold" }}>Cell Selection Style:</label>
                    <DropDownListComponent
                        width="150"
                        dataSource={cellModeOptions}
                        index={0}
                        change={cellSelectionModeChange}
                    />
                </div>
            </div>

            <GanttComponent
                ref={(g) => (ganttInstance = g)}
                height="370px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
            >
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));