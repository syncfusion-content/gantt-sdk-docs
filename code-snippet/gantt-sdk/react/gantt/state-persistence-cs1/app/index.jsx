import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Toolbar,
  Inject
} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
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
    'Search', 'ExpandAll', 'CollapseAll',
    'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'
  ];

  const splitterSettings = { columnIndex: 2 };

  return (
    <div>
      <button id="restore" style={{ marginBottom: "20px" }}
        onClick={() => { location.reload(); }}>
        Restore
      </button>

      <GanttComponent
        id="TaskDetails"
        height="430px"
        allowSorting={true}
        allowFiltering={true}
        dataSource={data}
        taskFields={taskFields}
        editSettings={editSettings}
        toolbar={toolbar}
        enablePersistence={true}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="90" textAlign="Right" />
          <ColumnDirective field="TaskName" width="290" />
          <ColumnDirective field="StartDate" width="390" format="yMd" textAlign="Right" />
          <ColumnDirective field="Duration" width="120" textAlign="Right" />
          <ColumnDirective field="Progress" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));