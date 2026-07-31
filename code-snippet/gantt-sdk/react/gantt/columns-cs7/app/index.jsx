import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttData } from './datasource';

function App() {
  let gantt = null;

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '75%'
  };

  const addColumns = () => {
    const newColumns = [
      { field: 'TaskID', headerText: 'TaskID', width: 120 },
      { field: 'StartDate', headerText: 'StartDate', width: 120, format: 'yMd' }
    ];
    newColumns.forEach(col => {
      gantt.treeGrid.grid.columns.push(col);
    });
    gantt.treeGrid.grid.refreshColumns();
  };

  const deleteColumns = () => {
    gantt.treeGrid.grid.columns.pop();
    gantt.treeGrid.grid.refreshColumns();
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <ButtonComponent id="add" cssClass="e-info" onClick={addColumns} style={{ marginRight: '10px' }}>
          Add Column
        </ButtonComponent>
        <ButtonComponent id="delete" cssClass="e-info" onClick={deleteColumns}>
          Delete Column
        </ButtonComponent>
      </div>
      <GanttComponent
        ref={g => (gantt = g)}
        height="430px"
        dataSource={GanttData}
        taskFields={taskSettings}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="150" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));