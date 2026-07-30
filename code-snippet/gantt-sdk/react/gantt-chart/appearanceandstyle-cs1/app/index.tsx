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
    parentID: 'ParentID',
  };
  return <GanttComponent dataSource={data} taskFields={taskFields} rowHeight={50}
    taskbarHeight={40} height='450px'>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));