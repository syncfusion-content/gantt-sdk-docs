import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    GanttComponent,
    Inject,
    Sort,
    ColumnsDirective,
    ColumnDirective,
    SortDirection,
    SplitterSettingsModel
} from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { data } from "./datasource";

function App() {
    let ganttInstance: GanttComponent | null = null;
    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };
    const splitterSettings: SplitterSettingsModel = { columnIndex: 3 };
    function sort(): void {
        if (ganttInstance) {
            ganttInstance.sortModule.sortColumn(
                "CustomColumn",
                "Ascending" as SortDirection,
                false
            );
        }
    }

    return (
        <div>
            <ButtonComponent cssClass='e-outline' onClick={sort}>Sort Custom Column</ButtonComponent>
            <br />
            <br />

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                splitterSettings={splitterSettings}
                allowSorting={true}
                ref={g => ganttInstance = g}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="200" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="100" />
                    <ColumnDirective field="Progress" headerText="Progress" width="100" />
                    <ColumnDirective field="CustomColumn" headerText="Custom Column" width="150" />
                </ColumnsDirective>

                <Inject services={[Sort]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));