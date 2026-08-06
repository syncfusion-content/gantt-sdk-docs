import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, EditSettingsModel, GanttAction, ToolbarItem, Toolbar, Selection, Edit, Filter, Sort, RowDD, ColumnMenu, Reorder, Resize, UndoRedo } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
function App() {
  let gantt: any;
  const taskFields: any = {
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
  const undoRedoActions: GanttAction[] = ['Add', 'Edit', 'Delete', 'Search', 'Sorting', 'Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent',
    'PreviousTimeSpan', 'NextTimeSpan', 'ColumnState'];
  const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent',
    'PrevTimeSpan', 'NextTimeSpan', 'Undo', 'Redo'];
  function undo() {
    gantt.undo();
  }
  function redo() {
    gantt.redo();
  }
  return (<div>
    <ButtonComponent onClick={undo}>Undo</ButtonComponent>
    <ButtonComponent onClick={redo}>Redo</ButtonComponent>
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