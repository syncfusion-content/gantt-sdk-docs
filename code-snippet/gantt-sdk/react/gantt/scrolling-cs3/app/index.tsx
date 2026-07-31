import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  TaskFieldsModel,
  Selection,
  Inject,
} from '@syncfusion/ej2-react-gantt';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

let ganttObj: GanttComponent | null = null;
let rowInputObj: TextBoxComponent | null = null;
let dateInputObj: TextBoxComponent | null = null;
let taskInputObj: TextBoxComponent | null = null;

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  function selectRow(): void {
    const value: number = parseInt(rowInputObj.value as string, 10);
    if (!isNaN(value)) {
      ganttObj.selectionModule.selectRow(value);
      const position: number = (ganttObj as any).rowHeight * value;
      (ganttObj as any).setScrollTop(position);
    }
  }

  function scrollToDate(): void {
    const value: string = dateInputObj.value as string;
    if (value) {
      ganttObj.scrollToDate(value);
    }
  }

  function scrollToTask(): void {
    const value: string = taskInputObj.value as string;
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
            ref={(e: TextBoxComponent) => (rowInputObj = e)}
            width='150px'
            placeholder='e.g., 1'
          />
          <ButtonComponent onClick={selectRow}>
            Select Row
          </ButtonComponent>
        </div>

        <div>
          <label>Scroll to Date:</label>
          <TextBoxComponent
            ref={(e: TextBoxComponent) => (dateInputObj = e)}
            width='150px'
            placeholder='MM/DD/YYYY'
          />
          <ButtonComponent onClick={scrollToDate}>
            Scroll Date
          </ButtonComponent>
        </div>

        <div>
          <label>Scroll to Task ID:</label>
          <TextBoxComponent
            ref={(e: TextBoxComponent) => (taskInputObj = e)}
            width='150px'
            placeholder='e.g., 3'
          />
          <ButtonComponent onClick={scrollToTask}>
            Scroll Task
          </ButtonComponent>
        </div>
      </div>

      <div style={{ height: '500px' }}>
        <GanttComponent
          ref={(e: GanttComponent) => (ganttObj = e)}
          height='315px'
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