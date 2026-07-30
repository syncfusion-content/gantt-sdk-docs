import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, TimelineSettingsModel, ColumnModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const timelineSettings: TimelineSettingsModel = {
    showTooltip: true
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      columns={columns}
      timelineSettings={timelineSettings}
    >
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));