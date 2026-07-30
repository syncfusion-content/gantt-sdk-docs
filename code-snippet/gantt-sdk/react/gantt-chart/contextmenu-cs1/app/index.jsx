import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection, ContextMenu, Edit, Sort, Resize } from "@syncfusion/ej2-react-gantt";

import { data } from "./datasource";

function App() {

    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: "ParentID"
    };

    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            enableContextMenu={true}
            allowSorting={true}
            allowResizing={true}
            editSettings={editSettings}
        >
            <Inject services={[Selection, ContextMenu, Edit, Sort, Resize]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));