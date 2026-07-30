import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Sort } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel, ColumnModel, SplitterSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-react-gantt';

function App() {
  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '120' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];
  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };
  const filterSettings: FilterSettingsModel = {
    type: 'Excel'
  };
  return (
    <GanttComponent
      height="370px"
      allowFiltering={true}
      allowSorting={true}
      dataSource={data}
      taskFields={taskSettings}
      columns={columns}
      splitterSettings={splitterSettings}
      filterSettings={filterSettings}
    >
      <Inject services={[Filter, Sort]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));