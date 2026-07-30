import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Selection, Edit, Filter, Sort, RowDD, ColumnMenu, Reorder, Resize, UndoRedo } from '@syncfusion/ej2-react-gantt';
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
  const editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };
  const undoRedoStepsCount = 5;
  const undoRedoActions = ['Add', 'Edit', 'Delete', 'Search', 'Sorting', 'Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent', 'PreviousTimeSpan', 'NextTimeSpan', 'ColumnState'];
  const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent',
    'PrevTimeSpan', 'NextTimeSpan', 'Undo', 'Redo'];
  return <GanttComponent
    dataSource={data}
    taskFields={taskFields}
    allowSelection={true}
    allowSorting={true}
    allowFiltering={true}
    allowRowDragAndDrop={true}
    undoRedoStepsCount={undoRedoStepsCount}
    editSettings={editOptions}
    showColumnMenu={true}
    enableUndoRedo={true}
    allowResizing={true}
    allowReordering={true}
    toolbar={toolbarOptions}
    undoRedoActions={undoRedoActions}
    height='450px'>
    <Inject services={[Toolbar, Selection, Edit, Filter, Sort, RowDD, ColumnMenu, Reorder, Resize, UndoRedo]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));