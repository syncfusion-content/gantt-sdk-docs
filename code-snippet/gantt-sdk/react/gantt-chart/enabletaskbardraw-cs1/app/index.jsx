import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  Inject,
  Edit,
  Selection,
} from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    endDate: 'EndDate'
  };

  const labelSettings = {
    leftLabel: 'TaskName'
  };

  const editSettings = {
    allowTaskbarEditing: true,
    allowTaskbarDraw: true
  };

  return (
    <GanttComponent
      dataSource={GanttData}
      height="450px"
      projectStartDate={new Date('03/28/2019')}
      projectEndDate={new Date('05/18/2019')}
      taskFields={taskFields}
      labelSettings={labelSettings}
      editSettings={editSettings}
      allowUnscheduledTasks={true}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));