import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, ColumnModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 150 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
  ];
  function onDataBound() {
    const ganttObj: any = (document.querySelector('#ganttDefault') as any).ej2_instances[0];
    const originalPersist = ganttObj.addOnPersist;
    ganttObj.addOnPersist = (keys: string[]) => {
      const filteredKeys = keys.filter(key => key !== 'columns');
      return originalPersist.call(ganttObj, filteredKeys);
    };
  }

  function addColumn() {
    const ganttObj: any = (document.querySelector('#ganttDefault') as any).ej2_instances[0];
    const newColumn: ColumnModel = {
      field: 'Progress',
      headerText: 'Progress',
      width: 100
    };
    ganttObj.columns.push(newColumn);
    ganttObj.refresh();
  }

  function removeColumn() {
    const ganttObj: any = (document.querySelector('#ganttDefault') as any).ej2_instances[0];
    ganttObj.columns.pop();
    ganttObj.refresh();
  }

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <ButtonComponent
          id="add"
          style={{ marginRight: "8px" }}
          onClick={addColumn}>
          Add Column
        </ButtonComponent>
        <ButtonComponent
          id="remove"
          onClick={removeColumn}>
          Remove Column
        </ButtonComponent>
      </div>

      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        columns={columns}
        enablePersistence={true}
        dataBound={onDataBound}
      >
      </GanttComponent>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));