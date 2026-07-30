import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let checked: boolean = false;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: '100', textAlign: 'Left' },
    { field: 'Predecessor', headerText: 'Dependency', width: '150' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const change = () => {
    const container = document.querySelector('.e-gantt-dependency-view-container') as HTMLElement;
    if (container) {
      container.style.visibility = checked ? 'visible' : 'hidden';
    }
    checked = !checked;
  };

  return (
    <div>
      <label>Show/Hide Dependency Line </label>
      <SwitchComponent onLabel="ON" offLabel="OFF" checked={checked} change={change} />
      <GanttComponent id="ganttDefault" height="430px" dataSource={data} taskFields={taskFields} editSettings={editSettings} columns={columns}>
        <Inject services={[Edit]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));