import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ganttData } from './datasource';

function App() {
  var gantt: GanttComponent = null;

  var taskFields: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };

  var splitterSettings: object = { position: '75%' };
  var editSettings: object = { allowEditing: true, allowAdding: true, allowDeleting: true };

  var generateNewTask = () => ({
    TaskID: generateTaskID(),
    TaskName: generateTaskName(),
    StartDate: new Date(),
    Duration: Math.floor(Math.random() * 10) + 1,
    Progress: 0
  });

  var generateTaskID = () => Math.floor(1000 + Math.random() * 90000);
  var generateTaskName = () => {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length: 5 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  var addAbove = () => {
    var newRecord = generateNewTask();
    gantt.addRecord(newRecord, 'Above', 0);
  };

  var addBelow = () => {
    var newRecord = generateNewTask();
    gantt.addRecord(newRecord, 'Below', 1);
  };

  var addChild = () => {
    var newRecord = generateNewTask();
    gantt.clearSelection();
    gantt.addRecord(newRecord, 'Child', 2);
  };

  return (
    <div>
      <div style={{ padding: '0 0 20px 0' }}>
        <ButtonComponent id="above" style={{ marginRight: '10px' }} onClick={addAbove}>
          Add New Row as Above position
        </ButtonComponent>
        <ButtonComponent id="below" style={{ marginRight: '10px' }} onClick={addBelow}>
          Add New Row as Below position
        </ButtonComponent>
        <ButtonComponent id="child" onClick={addChild}>
          Add New Row as Child position
        </ButtonComponent>
      </div>
      <GanttComponent
        id="ganttDefault"
        ref={g => gantt = g}
        dataSource={ganttData}
        taskFields={taskFields}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        editSettings={editSettings}
        height="430px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
        <Inject services={[Edit]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
