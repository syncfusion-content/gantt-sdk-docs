import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Toolbar, Inject, Filter } from '@syncfusion/ej2-react-gantt';
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

  const splitterSettings = {
    columnIndex: 3
  };

  const toolbar = ['Search'];

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      toolbar={toolbar}
      height="370px">
      <Inject services={[Filter, Toolbar]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));