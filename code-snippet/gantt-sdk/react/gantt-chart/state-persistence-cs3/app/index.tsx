import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject
} from '@syncfusion/ej2-react-gantt';
import {
  TaskFieldsModel,
  EditSettingsModel,
  ToolbarItem,
  SplitterSettingsModel,
  SortSettingsModel,
  Edit,
  Toolbar,
  Sort
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
    'Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search',
    'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'
  ];

  const splitterSettings: SplitterSettingsModel = { columnIndex: 2 };

  const sortSettings: SortSettingsModel = {
    columns: []
  };

  let message: string = "";

  function save() {
    const ganttObj: any = (document.querySelector('#TaskDetails') as any).ej2_instances[0];
    const persistData = ganttObj.getPersistData();
    if (persistData) {
      window.localStorage.setItem("ganttTaskDetails", persistData);
      message = "Gantt state saved.";
      updateMessage();
    }
  }

  function restore() {
    const value = window.localStorage.getItem("ganttTaskDetails");
    const ganttObj: any = (document.querySelector('#TaskDetails') as any).ej2_instances[0];

    if (value) {
      const state = JSON.parse(value);
      ganttObj.treeGrid.setProperties(state);
      message = "Previous Gantt state restored.";
    } else {
      message = "No saved state found.";
    }
    updateMessage();
  }

  function updateMessage() {
    const msg = document.getElementById("msg");
    if (msg) msg.innerHTML = message;
  }

  return (
    <div>
      <button className="e-success" style={{ marginRight: "10px" }} onClick={save}>
        Save
      </button>
      <button className="e-danger" onClick={restore}>
        Restore
      </button>

      <div
        id="msg"
        style={{ marginTop: "20px", marginBottom: "10px", color: "green", textAlign: "center" }}>
      </div>

      <GanttComponent
        id="TaskDetails"
        height="430px"
        allowSorting={true}
        allowFiltering={true}
        editSettings={editSettings}
        toolbar={toolbar}
        dataSource={data}
        taskFields={taskSettings}
        enablePersistence={true}
        splitterSettings={splitterSettings}
        sortSettings={sortSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="90" textAlign="Right" />
          <ColumnDirective field="TaskName" width="290" />
          <ColumnDirective field="StartDate" width="390" textAlign="Right" format="yMd" />
          <ColumnDirective field="Duration" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Sort]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));