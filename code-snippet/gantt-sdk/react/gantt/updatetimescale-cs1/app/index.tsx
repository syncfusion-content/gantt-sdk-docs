import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, TimelineSettingsModel, EditSettings, Edit, Inject } from '@syncfusion/ej2-react-gantt';
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

  const timelineSettings: TimelineSettingsModel = {
    updateTimescaleView: false
  };

  const editSettings: EditSettings = {
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