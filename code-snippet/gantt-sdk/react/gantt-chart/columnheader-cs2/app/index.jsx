import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
    const taskFields = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID",
    };
    function ganttTemplate(props) {
        var src = props.field + ".png";
        return (<div className="image" >
            <img src={src} style={{ height: "20px" }} /> {props.field}
        </div>);
    };
    const template = ganttTemplate;
    return <GanttComponent dataSource={data} taskFields={taskFields} height="450px">
        <ColumnsDirective>
            <ColumnDirective field="TaskName" headerTemplate={template} headerText="Task Name"></ColumnDirective>
            <ColumnDirective field="StartDate" headerText="Start Date"></ColumnDirective>
            <ColumnDirective field="Duration" headerTemplate={template} headerText="Duration"></ColumnDirective>
            <ColumnDirective field="Progress" headerText="Progress"></ColumnDirective>
        </ColumnsDirective>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById("root"));