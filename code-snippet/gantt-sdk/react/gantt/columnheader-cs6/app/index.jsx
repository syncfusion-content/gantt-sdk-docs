import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
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

  let dropDown = null;
  let textBox = null;
  let gantt = null;

  const field = { text: 'text', value: 'value' };

  const alignmentData = [
    { text: 'TaskName', value: 'TaskName' },
    { text: 'StartDate', value: 'StartDate' },
    { text: 'Duration', value: 'Duration' },
    { text: 'Progress', value: 'Progress' },
  ];
  const changeHeaderText = () => {
    if (dropDown && textBox && gantt) {
      const selectedField = dropDown.value;
      const column = gantt.treeGrid.grid.getColumnByField(selectedField);
      if (column && textBox.element.value.trim() !== '') {
        column.headerText = textBox.element.value;
        gantt.treeGrid.grid.refreshHeader();
      }
    }
  };

  return (
    <div>
      <label style={{ padding: '10px 10px 26px 0' }}>Select column name:</label>
      <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="150" fields={field} />
      <br />
      <label style={{ padding: '30px 17px 0 0' }}>Enter new header text:</label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
      <br />
      <label style={{ padding: '30px 17px 0 0' }}>Click the change button:</label>
      <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px">
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" />
            <ColumnDirective field="TaskName" headerText="Task Name" />
            <ColumnDirective field="StartDate" headerText="Start Date" />
            <ColumnDirective field="Duration" headerText="Duration" />
            <ColumnDirective field="Progress" headerText="Progress" />
          </ColumnsDirective>
          <Inject />
        </GanttComponent>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));