import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers } from '@syncfusion/ej2-react-gantt';
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
  const workWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  return <GanttComponent dataSource={data} taskFields={taskFields} workWeek={workWeek} height='450px'>
    <Inject services={[DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));