import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent, ColumnsDirective, ColumnDirective, Inject, CollapsingEventArgs
} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const gantt = null;
  const collapsingData = [];
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings = {
    position: '75%'
  };

  // Restore collapsed rows after initial render
  const onDataBound = () => {
    if (gantt && gantt.treeGrid.initialRender && window.localStorage) {
      const storedData = JSON.parse(localStorage.getItem('collapsingData') || '[]');
      if (storedData.length) {
        storedData.forEach((key) => {
          gantt.treeGrid.collapseByKey(key);
        });
      }
    }
  };

  // Handle collapse event
  const onCollapsed = (args) => {
    collapsingData.push(args.data.TaskID);
    updateLocalStorage(collapsingData);
  };

  // Handle expand event
  const onExpanded = (args) => {
    const index = collapsingData.findIndex((id) => id === args.data.TaskID);
    if (index !== -1) {
      collapsingData.splice(index, 1);
      updateLocalStorage(collapsingData);
    }
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem('collapsingData', JSON.stringify(data));
  };

  return (
    <div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        dataBound={onDataBound}
        collapsed={onCollapsed}
        expanded={onExpanded}
        ref={g => gantt = g}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" isPrimaryKey={true} textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));