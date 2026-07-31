import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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
    let gantt;
    const alignmentData = [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' },
    ];
    const changeAlignment = ((args) => {
        gantt.treeGrid.grid.columns.forEach((col) => {
            col.headerTextAlign = args.value;
        });
        gantt.treeGrid.grid.refreshHeader();
    })
    return <div>
        <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
        <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
        <div style={{ padding: '40px 0 0 0' }}></div>
        <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px">
            <ColumnsDirective>
                <ColumnDirective field="TaskName" headerText="Task Name"></ColumnDirective>
                <ColumnDirective field="StartDate" headerText="Start Date"></ColumnDirective>
                <ColumnDirective field="Duration" headerText="Duration"></ColumnDirective>
                <ColumnDirective field="Progress" headerText="Progress"></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById("root"));