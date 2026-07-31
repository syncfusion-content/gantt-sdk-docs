import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { projectViewMultiTaskData } from './datasource';

function App() {

  const data = projectViewMultiTaskData;

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  return (
    <GanttComponent
      id="Gantt"
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      enableMultiTaskbar={true}
      treeColumnIndex={1}
      allowSelection={true}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));