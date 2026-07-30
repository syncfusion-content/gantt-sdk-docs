import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
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
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const toolbar = [
    'Add', 'Edit', 'Delete', 'Update', 'Cancel',
    'ExpandAll', 'CollapseAll', 'PrevTimeSpan',
    'NextTimeSpan', 'Indent', 'Outdent'
  ];

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      editSettings={editSettings}
      toolbar={toolbar}>
      <Inject services={[Edit, Toolbar, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));