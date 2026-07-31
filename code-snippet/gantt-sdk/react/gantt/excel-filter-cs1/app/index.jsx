import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Sort } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const filterSettings = { type: 'Excel' };
  const splitterSettings = { columnIndex: 3 };
  const customFilter = (props) => {
    return props.IsCompleted ? 'Completed' : 'In Progress';
  }
  const columnFilterSettings = {
    type: 'Excel',
    itemTemplate: customFilter
  }
  return (
    <GanttComponent
      height="450px"
      width="700px"
      dataSource={data}
      taskFields={taskSettings}
      allowFiltering={true}
      filterSettings={filterSettings}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" isPrimaryKey={true} />
        <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="EndDate" headerText="End Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
        <ColumnDirective field="IsCompleted" headerText="Status" width="150" displayAsCheckBox={true} filter={columnFilterSettings} type="boolean" />
      </ColumnsDirective>
      <Inject services={[Filter, Sort]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));