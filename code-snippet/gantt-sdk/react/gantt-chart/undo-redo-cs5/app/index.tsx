import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, EditSettingsModel, GanttAction, TaskFieldsModel, ToolbarItem, Toolbar, Selection, Edit, Filter, Sort, RowDD, ColumnMenu, Reorder, Resize, UndoRedo } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
function App() {
  let gantt: GanttComponent;
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };
  const undoRedoActions: GanttAction[] = ['Add', 'Edit', 'Delete', 'Search', 'Sorting', 'Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent', 'PreviousTimeSpan', 'NextTimeSpan', 'ColumnState'];
  const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent', 'PrevTimeSpan', 'NextTimeSpan', 'Undo', 'Redo'];
  function clearundocollection() {
    gantt.clearUndoCollection();
  }
  function clearredocollection() {
    gantt.clearRedoCollection();
  }
  return (<div>
    <ButtonComponent onClick={clearundocollection}>ClearUndoCollection</ButtonComponent>
    <ButtonComponent onClick={clearredocollection}>ClearRedoCollection</ButtonComponent>
    <GanttComponent
      dataSource={data}
      ref={g => gantt = g}
      taskFields={taskFields}
      allowSelection={true}
      allowSorting={true}
      allowFiltering={true}
      allowRowDragAndDrop={true}
      editSettings={editOptions}
      showColumnMenu={true}
      enableUndoRedo={true}
      allowResizing={true}
      allowReordering={true}
      toolbar={toolbarOptions}
      undoRedoActions={undoRedoActions}
      height='450px'>
      <Inject services={[Toolbar, Selection, Edit, Filter, Sort, RowDD, ColumnMenu, Reorder, Resize, UndoRedo]} />
    </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));