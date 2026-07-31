import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Reorder, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null;

  const taskFields: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettings = {
    position: '75%'
  };

  const reorderByIndex = () => {
    ganttInstance.treeGrid.grid.reorderColumnByIndex(1, 3);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button className="e-control e-btn e-info" onClick={reorderByIndex}>
          Reorder Column by Index
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <GanttComponent
          ref={(gantt) => (ganttInstance = gantt)}
          dataSource={data}
          taskFields={taskFields}
          splitterSettings={splitterSettings}
          allowReordering={true}
          treeColumnIndex={1}
          height="430px"
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
          </ColumnsDirective>
          <Inject services={[Reorder]} />
        </GanttComponent>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));