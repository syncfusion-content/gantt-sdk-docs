import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let gantt = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentID'
  };

  // 1. Expand all
  const expandAll = () => gantt.expandAll();

  // 2. Collapse all
  const collapseAll = () => gantt.collapseAll();

  // 3. Expand at level (Level 0 = root tasks)
  const expandLevel0 = () => gantt.treeGrid.expandAtLevel(0);

  // 4. Collapse at level (Level 1 = first child level)
  const collapseLevel1 = () => gantt.treeGrid.collapseAtLevel(1);

  // 5. Expand by key (TaskID)
  const expandById = (id) => gantt.treeGrid.expandByKey(id);

  // 6. Collapse by key (TaskID)
  const collapseById = (id) => gantt.treeGrid.collapseByKey(id);

  // 7. Expand first row by DOM element
  const expandFirstRow = () => {
    const rows = gantt.treeGrid.getRows();
    if (rows && rows.length > 0) {
      gantt.treeGrid.expandRow(rows[0]);
    }
  };

  // 8. Collapse first row by DOM element
  const collapseFirstRow = () => {
    const rows = gantt.treeGrid.getRows();
    if (rows && rows.length > 0) {
      gantt.treeGrid.collapseRow(rows[0]);
    }
  };

  return (
    <div>
      <div className="controls" style={{ padding: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', background: '#f5f5f5', borderTop: '1px solid #ddd' }}>
        <ButtonComponent cssClass="e-primary" onClick={expandAll}>Expand All</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={collapseAll}>Collapse All</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={expandLevel0}>Expand Level 0</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={collapseLevel1}>Collapse Level 1</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={() => expandById(2)}>Expand Task ID 2</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={() => collapseById(1)}>Collapse Task ID 1</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={expandFirstRow}>Expand First Row (DOM)</ButtonComponent>
        <ButtonComponent cssClass="e-primary" onClick={collapseFirstRow}>Collapse First Row (DOM)</ButtonComponent>
      </div>

      <GanttComponent
        ref={g => gantt = g}
        dataSource={data}
        taskFields={taskFields}
        treeColumnIndex={1}
        height="460px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="80" />
          <ColumnDirective field="TaskName" headerText="Name" width="200" />
          <ColumnDirective field="Duration" headerText="Duration" width="100" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));