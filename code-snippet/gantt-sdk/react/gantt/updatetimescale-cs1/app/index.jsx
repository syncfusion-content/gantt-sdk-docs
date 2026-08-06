import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Edit, Inject } from '@syncfusion/ej2-react-gantt';
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

  const timelineSettings = {
    updateTimescaleView: false
  };

  const editSettings = {
    allowEditing: true,
    allowTaskbarEditing: true
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      timelineSettings={timelineSettings}
      editSettings={editSettings}
    >
       <Inject services={[Edit]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));