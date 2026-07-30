import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
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
  const editOptions: EditSettingsModel = {
    allowTaskbarEditing: true
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    editSettings={editOptions} height='450px'>
    <Inject services={[Edit]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));