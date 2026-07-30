import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
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
  const editOptions = {
    allowEditing: true,
    mode: 'Dialog'
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    editSettings={editOptions} height='450px'>
    <Inject services={[Edit]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));