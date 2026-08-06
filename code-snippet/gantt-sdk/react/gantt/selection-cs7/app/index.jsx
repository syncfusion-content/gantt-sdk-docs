import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let textBoxObj = null;
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const selectionSettings = {
    mode: 'Row',
    type: 'Single'
  };
  function clickHandler() {
    if (textBoxObj) {
      const value = textBoxObj.value;
      const index = parseInt(value, 10);
      if (!isNaN(index)) {
        const ganttObj = document.querySelector('#gantt').ej2_instances[0];
        ganttObj.selectRow(index);
      }
    }
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Enter the row index:</label>
        <TextBoxComponent width="100" ref={(scope) => { textBoxObj = scope; }} />
        <ButtonComponent onClick={clickHandler}>Select Row</ButtonComponent>
      </div>
      <GanttComponent
        id="gantt"
        height="370px"
        dataSource={data}
        taskFields={taskSettings}
        selectionSettings={selectionSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="90" textAlign="Right" />
          <ColumnDirective field="TaskName" width="200" />
          <ColumnDirective field="StartDate" width="120" format="yMd" />
          <ColumnDirective field="Duration" width="120" textAlign="Right" />
          <ColumnDirective field="Progress" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));