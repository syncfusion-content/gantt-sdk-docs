import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Edit, Selection, Toolbar, ToolbarItem, ActionCompleteArgs } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
function App() {
    const taskFields: object = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };
    const editOptions: object = {
        allowAdding: true,
        allowEditing: true,
        mode: "Auto"
    };
    const toolbarOptions: ToolbarItem[] = ["Add", "Indent", "Outdent"];

    let messageElement: HTMLParagraphElement | null = null;

    const setmessageElement = (el: HTMLParagraphElement | null) => {
        messageElement = el;
    };

    const updateMessage = (text: string) => {
        if (messageElement) {
            messageElement.textContent = text;
        }
    };

    const actionComplete = (args: ActionCompleteArgs) => {
        const taskData = args.data;
        if (args.requestType === "outdented") {
            updateMessage(`Task ID ${(taskData[0] as any).TaskID} has been outdented`);
        } else if (args.requestType === "indented") {
            updateMessage(`Task ID ${(taskData[0] as any).TaskID} has been indented`);
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