import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import { data } from "./datasource";

function App() {
  const taskFields: any = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };
  let gantt: GanttComponent | null;
const changeHeaderHeight = ((event: any) => {
    const heightMap = { small: '20px', medium: '42px', big: '60px' };
    const headerCells = gantt.treeGrid.grid.getHeaderContent().querySelectorAll('.e-headercell');
    headerCells.forEach((headerCell: any) => {
      headerCell.style.height = heightMap[event.target.id];
    });
  });
  return <div>
    <div style={{ marginBottom: '10px' }}>
          <ButtonComponent id="small" onClick={changeHeaderHeight}>
            Header Height: 20px
          </ButtonComponent>{' '}
          <ButtonComponent id="medium" onClick={changeHeaderHeight}>
            Header Height: 42px
          </ButtonComponent>{' '}
          <ButtonComponent id="big" onClick={changeHeaderHeight}>
            Header Height: 60px
          </ButtonComponent>
        </div>
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