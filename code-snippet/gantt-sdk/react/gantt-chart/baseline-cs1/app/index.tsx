import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { baselineData } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    duration: 'Duration',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    baselineDuration: 'BaselineDuration',
    parentID: 'ParentID'
  };

  return <GanttComponent dataSource={baselineData} renderBaseline={true} baselineColor='red'
    taskFields={taskFields} height='430px'>
  </GanttComponent>

};
ReactDOM.render(<App />, document.getElementById('root'));