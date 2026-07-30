import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
let ganttObj = null;
let rowInputObj = null;
let dateInputObj = null;
let taskInputObj = null;

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
  };
  // Select row by index and scroll vertically.
  function selectRow() {
    const value = parseInt(rowInputObj.value, 10);
    if (!isNaN(value)) {
      ganttObj.selectionModule.selectRow(value);
      const position = ganttObj.rowHeight * value;
      ganttObj.setScrollTop(position);
    }
  }
  // Scroll horizontally to a specific date.
  function scrollToDate() {
    const value = dateInputObj.value;
    if (value) {
      ganttObj.scrollToDate(value);
    }
  }
  // Scroll horizontally to a specific task by ID.
  function scrollToTask() {
    const value = taskInputObj.value;
    if (value) {
      ganttObj.scrollToTask(value);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <div>
          <label>Row Index:</label>
          <TextBoxComponent
            ref={(e) => (rowInputObj = e)}
            width="150px"
            placeholder="e.g., 1"
          />
          <ButtonComponent onClick={selectRow}>Select Row</ButtonComponent>
        </div>

        <div>
          <label>Scroll to Date:</label>
          <TextBoxComponent
            ref={(e) => (dateInputObj = e)}
            width="150px"
            placeholder="MM/DD/YYYY"
          />
          <ButtonComponent onClick={scrollToDate}>Scroll Date</ButtonComponent>
        </div>

        <div>
          <label>Scroll to Task ID:</label>
          <TextBoxComponent
            ref={(e) => (taskInputObj = e)}
            width="150px"
            placeholder="e.g., 3"
          />
          <ButtonComponent onClick={scrollToTask}>Scroll Task</ButtonComponent>
        </div>
      </div>

      <div style={{ height: '500px' }}>
        <GanttComponent
          ref={(e) => (ganttObj = e)}
          height="315px"
          dataSource={data}
          taskFields={taskFields}
        >
          <Inject services={[Selection]} />
        </GanttComponent>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));