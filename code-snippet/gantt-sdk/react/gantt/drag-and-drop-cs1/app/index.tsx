
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  RowDD as GanttRowDD,
  Edit as GanttEdit,
  Selection as GanttSelection
} from '@syncfusion/ej2-react-gantt';
import {
  TreeGridComponent,
  ColumnsDirective as TGColumnsDirective,
  ColumnDirective as TGColumnDirective,
  Inject as TGInject,
  RowDD as TGRowDD,
  Edit as TGEdit
} from '@syncfusion/ej2-react-treegrid';
import { projectNewData } from './datasource';

function App() {
  let ganttRef: GanttComponent = null;
  let treeRef: TreeGridComponent = null;

  const data = projectNewData;
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const selectionOptions = { type: 'Multiple' };
  const treeGridEditSettings = { allowAdding: true, allowEditing: true };
  const editSettings = { allowDeleting: true };
  const splitterSettings = { position: '75%' };

  function onLoad() {
    if (ganttRef) {
      ganttRef.treeGrid.rowDropSettings = { targetID: 'TreeGrid' };
    }
  }

  function onRowDrop(args: any) {
    const targetGrid = args.target.closest('.e-grid');
    if (targetGrid) {
      args.cancel = true;
      const rowEl = args.target.closest('.e-row');
      const rowIndex = rowEl ? rowEl.rowIndex : 0;
      const draggedData = args.data;
      draggedData.forEach((item: any) => {
        if (treeRef) {
          treeRef.addRecord(item, rowIndex);
        }
        if (ganttRef) {
          ganttRef.deleteRecord(item);
        }
      });
    }
  }

  return (
    <div style={{ display: 'flex', gap: '2%' }}>
      {/* Gantt Panel */}
      <div style={{ width: '49%' }}>
        <GanttComponent
          id="ganttDefault"
          ref={(g) => (ganttRef = g)}
          height="450px"
          treeColumnIndex={1}
          dataSource={data}
          allowRowDragAndDrop={true}
          taskFields={taskSettings}
          selectionSettings={selectionOptions}
          editSettings={editSettings}
          splitterSettings={splitterSettings}
          load={onLoad}
          rowDrop={onRowDrop}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
          </ColumnsDirective>
          <Inject services={[GanttRowDD, GanttSelection, GanttEdit]} />
        </GanttComponent>
      </div>

      {/* TreeGrid Panel */}
      <div style={{ width: '49%' }}>
        <TreeGridComponent
          id="TreeGrid"
          ref={(t) => (treeRef = t)}
          dataSource={[]}
          childMapping="subtasks"
          editSettings={treeGridEditSettings}
        >
          <TGColumnsDirective>
            <TGColumnDirective field="taskID" headerText="Task ID" isPrimaryKey={true} textAlign="Right" width="90" />
            <TGColumnDirective field="taskName" headerText="Task Name" textAlign="Left" width="180" />
            <TGColumnDirective field="startDate" headerText="Start Date" textAlign="Right" format="yMd" width="120" />
            <TGColumnDirective field="duration" headerText="Duration" textAlign="Right" width="120" />
          </TGColumnsDirective>
          <TGInject services={[TGRowDD, TGEdit]} />
        </TreeGridComponent>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));