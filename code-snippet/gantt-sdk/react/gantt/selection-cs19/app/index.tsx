import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { data } from "./datasource";
function App() {

    let ganttObj: GanttComponent | null = null;
    let dialogObj: DialogComponent | null = null;

    function showDetails(): void {
        if (!ganttObj || !dialogObj) return;

        const selectedRecords = ganttObj.selectionModule.getCellSelectedRecords();
        const selectedIndexes = ganttObj.selectionModule.getSelectedRowCellIndexes();

        const container = document.getElementById("details-container");
        if (!container) return;

        let html = `
            <table border="1" cellpadding="6" cellspacing="0" style="width:100%; border-collapse: collapse;">
                <thead>
                <tr>
                    <th>Row Index</th>
                    <th>Cell Index</th>
                    <th>Row Details</th>
                </tr>
                </thead>
                <tbody>
        `;

        selectedIndexes.forEach((index: any, i: any) => {
            const r: any = selectedRecords[i] || {};

            html += `
            <tr>
            <td>${index.rowIndex}</td>
            <td>${index.cellIndexes.join(", ")}</td>
            <td>
                <table style="width:100%; border-collapse:collapse;">
                <tr><td><b>Task ID:</b></td><td>${r.TaskID}</td></tr>
                <tr><td><b>Task Name:</b></td><td>${r.TaskName}</td></tr>
                <tr><td><b>Start Date:</b></td><td>${r.StartDate ? new Date(r.StartDate).toDateString() : ""}</td></tr>
                <tr><td><b>Duration:</b></td><td>${r.Duration}</td></tr>
                <tr><td><b>Progress:</b></td><td>${r.Progress}%</td></tr>
                </table>
            </td>
            </tr>
        `;
        });

        html += `</tbody></table>`;

        container.innerHTML = html;
        dialogObj.show();
    }

    function closeDialog(): void {
        dialogObj && dialogObj.hide();
    }

    return (
        <div style={{ padding: "10px" }}>

            <ButtonComponent onClick={showDetails}>Show Selected Cell Details</ButtonComponent>

            <GanttComponent
                ref={(g) => (ganttObj = g)}
                height="370px"
                dataSource={data}
                selectionSettings={{ mode: "Cell", type: "Multiple" }}
                taskFields={{
                    id: "TaskID",
                    name: "TaskName",
                    startDate: "StartDate",
                    endDate: "EndDate",
                    duration: "Duration",
                    progress: "Progress",
                    parentID: "ParentID"
                }}
            >
                <Inject services={[Selection]} />
            </GanttComponent>

            <DialogComponent
                ref={(d) => (dialogObj = d)}
                header="Selected Cell Details"
                visible={false}
                close={closeDialog}
                width="600px"
                height="300px"
                showCloseIcon={true}
                position={{ X: 300, Y: 100 }}
            >
                <div id="details-container" style={{
                    maxHeight: "240px",
                    overflowY: "auto",
                    paddingRight: "10px"
                }}
                ></div>
            </DialogComponent>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
