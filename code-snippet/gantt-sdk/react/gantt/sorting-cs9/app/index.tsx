import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Sort, Inject, TaskFieldsModel, Columns, SplitterSettings, SortSettings } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const columns: Columns[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const splitterSettings: SplitterSettings = {
    columnIndex: 3
  };

  const sortSettings: SortSettings = {
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