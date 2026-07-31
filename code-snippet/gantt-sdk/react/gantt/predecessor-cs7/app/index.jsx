
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let ganttObj = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const editSettings = {
    allowTaskbarEditing: true,
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: '100', textAlign: 'Left' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Predecessor', headerText: 'Dependency', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const addDependency = () => {
    if (ganttObj) {
      ganttObj.addPredecessor(2, '3SF,7FS');
    }
  };

  const removeDependency = () => {
    if (ganttObj) {
      ganttObj.removePredecessor(4);
    }
  };

  const updateDependency = () => {
    if (ganttObj) {
      ganttObj.updatePredecessor(8, '7FS');
    }
  };

  return (<div>
    <div style={{ marginBottom: '10px' }}>
      <ButtonComponent onClick={addDependency}>Add Predecessor</ButtonComponent>
      <ButtonComponent onClick={removeDependency}>Remove Predecessor</ButtonComponent>
      <ButtonComponent onClick={updateDependency}>Update Predecessor</ButtonComponent>
    </div>
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      editSettings={editSettings}
      columns={columns}
      ref={(gantt) => (ganttObj = gantt)}>
      <Inject services={[Edit]} />
    </GanttComponent></div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
