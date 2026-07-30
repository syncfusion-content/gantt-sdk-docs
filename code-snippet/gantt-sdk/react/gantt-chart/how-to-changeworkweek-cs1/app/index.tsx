import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
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
  const workWeek: object = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  return <GanttComponent dataSource={data} taskFields={taskFields} workWeek={workWeek} height='450px'>
    <Inject services={[DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));