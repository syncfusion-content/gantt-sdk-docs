import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let ganttRef;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings = {
    columnIndex: 2
  };
  const filterSettings = {};
  function filterAction(e) {
    const id = e.target.id;
    if (id === 'performFilter') {
      ganttRef.filterByColumn('TaskName', 'startswith', 'Project');
    } else {
      ganttRef.clearFiltering();
    }
  }
  return (
    <div>
      <div style={{ marginBottom: '10px', display: 'flex', gap: '20px' }}>
        <button id="performFilter" onClick={filterAction}>Filter Task Name Column</button>
        <button id="clearFilter" onClick={filterAction}>Clear Filter</button>
      </div>
      <GanttComponent
        ref={(g) => ganttRef = g}
        height="370px"
        allowFiltering={true}
        dataSource={data}
        taskFields={taskFields}
        splitterSettings={splitterSettings}
        filterSettings={filterSettings}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='120' />
          <ColumnDirective field='TaskName' headerText='Task Name' width='250' />
          <ColumnDirective field='StartDate' headerText='Start Date' width='150' />
          <ColumnDirective field='Progress' headerText='Progress' width='150' />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));