import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
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
    columnIndex: 5
  };
  return <GanttComponent dataSource={data} taskFields={taskFields} splitterSettings={splitterSettings} allowReordering={true} height='450px'>
    <Inject services={[Reorder]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));