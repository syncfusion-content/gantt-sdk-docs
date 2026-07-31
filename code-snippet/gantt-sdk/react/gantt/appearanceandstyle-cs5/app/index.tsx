import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  return (
    <GanttComponent
      dataSource={data}
      gridLines='Both'
      taskFields={taskFields}
      height='450px'
      gridLines="Both"
    >
    </GanttComponent>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));