import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Edit, Selection, Toolbar, ToolbarItem, ActionCompleteArgs } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
function App() {
    const taskFields = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };
    const editOptions = {
        allowAdding: true,
        allowEditing: true,
        mode: "Auto"
    };
    const toolbarOptions = ["Add", "Indent", "Outdent"];

    let messageElement = null;

    const setmessageElement = (el) => {
        messageElement = el;
    };

    const updateMessage = (text) => {
        if (messageElement) {
            messageElement.textContent = text;
        }
    };

    const actionComplete = (args) => {
        const taskData = args.data;
        if (args.requestType === "outdented") {
            updateMessage(`Task ID ${(taskData[0]).TaskID} has been outdented`);
        } else if (args.requestType === "indented") {
            updateMessage(`Task ID ${(taskData[0]).TaskID} has been indented`);
        }
    };

    return (<div><div style={{ marginLeft: "180px" }}>
        <p style={{ color: "red" }} ref={setmessageElement}></p>
    </div>
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} height="450px" actionComplete={actionComplete}>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById("root"));