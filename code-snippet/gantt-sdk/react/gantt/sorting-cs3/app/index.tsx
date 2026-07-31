import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, SortSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
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
  const sortingOptions: SortSettingsModel = { columns: [{ field: 'TaskID', direction: 'Descending' }, { field: 'TaskName', direction: 'Ascending' }] };
  return <GanttComponent dataSource={data} taskFields={taskFields} sortSettings={sortingOptions} allowSorting={true} height='450px'>
    <Inject services={[Sort]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));