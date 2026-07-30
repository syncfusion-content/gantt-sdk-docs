import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let splitterSettings: SplitterSettingsModel = {
    position: '50%',
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      splitterSettings={splitterSettings}>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));