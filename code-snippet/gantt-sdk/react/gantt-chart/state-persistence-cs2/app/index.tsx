import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-gantt';
import {
  TaskFieldsModel,
  EditSettingsModel,
  ToolbarItem,
  SplitterSettingsModel,
  Edit,
  Toolbar,
  Inject
} from '@syncfusion/ej2-react-gantt';
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

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const toolbar: ToolbarItem[] = [
    'Add', 'Edit', 'Delete', 'Update', 'Cancel',
    'ExpandAll', 'CollapseAll',
    'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'
  ];

  const splitterSettings: SplitterSettingsModel = { columnIndex: 2 };

  function restoreClick() {
    window.localStorage.setItem("ganttTaskDetails", "");
    (document.getElementById("TaskDetails") as any).remove();
    location.reload();
  }

  return (
    <div>
      <button
        style={{ marginBottom: '20px' }}
        id="restore"
        onClick={restoreClick}>
        Restore
      </button>

      <GanttComponent
        id="TaskDetails"
        height="430px"
        allowFiltering={true}
        dataSource={data}
        taskFields={taskSettings}
        editSettings={editSettings}
        toolbar={toolbar}
        enablePersistence={true}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="90" textAlign="Right" />
          <ColumnDirective field="TaskName" width="290" />
          <ColumnDirective field="StartDate" width="390" textAlign="Right" format="yMd" />
          <ColumnDirective field="Duration" width="120" textAlign="Right" />
          <ColumnDirective field="Progress" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));