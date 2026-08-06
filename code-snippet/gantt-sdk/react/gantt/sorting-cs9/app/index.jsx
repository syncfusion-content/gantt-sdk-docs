import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Sort, Inject } from '@syncfusion/ej2-react-gantt';
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

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const splitterSettings = {
    columnIndex: 3
  };

  const sortSettings = {
    allowUnsort: false
  };
  return (
    <div>
      <GanttComponent
        height="430px"
        dataSource={data}
        taskFields={taskFields}
        columns={columns}
        splitterSettings={splitterSettings}
        sortSettings={sortSettings}
        allowSorting={true}
      >
        <Inject services={[Sort]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));