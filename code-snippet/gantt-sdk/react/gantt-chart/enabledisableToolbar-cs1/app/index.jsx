import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  GanttComponent,
  Inject,
  Edit,
  Toolbar,
  Selection,
  Filter,
} from '@syncfusion/ej2-react-gantt';

import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

import { data } from './datasource';

function App() {
  let ganttInstance = null;
  let message = '';

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };

  const toolbar = [
    { text: 'Quick Filter', id: 'QuickFilter' },
    { text: 'Clear Filter', id: 'ClearFilter' }
  ];

  const toolbarClick = (args) => {
    if (!ganttInstance) return;

    if (args.item.id === 'QuickFilter') {
      ganttInstance.filterByColumn('TaskName', 'contains', 'Approval');
      message = 'Filtered rows starting with "Approval".';
      document.getElementById('message').textContent = message;
    }

    if (args.item.id === 'ClearFilter') {
      ganttInstance.clearFiltering();
      message = 'Filters cleared.';
      document.getElementById('message').textContent = message;
    }
  };

  const onSwitchChange = (args)=> {
    if (!ganttInstance) return;
    const enable = args.checked;
    ganttInstance.toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], enable);
    message = enable ? 'Toolbar items enabled.' : 'Toolbar items disabled.';
    document.getElementById('message').textContent = message;
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Enable or disable toolbar items
        </label>
        <SwitchComponent checked={true} change={onSwitchChange} />
      </div>

      <p id="message" style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{message}</p>
      <GanttComponent
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        allowFiltering={true}
        editSettings={editSettings}
        toolbar={toolbar}
        toolbarClick={toolbarClick}
        ref={(gantt) => (ganttInstance = gantt)}
      >
        <Inject services={[Edit, Toolbar, Selection, Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));