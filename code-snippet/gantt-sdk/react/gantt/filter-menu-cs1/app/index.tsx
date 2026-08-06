import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  Inject,
  Filter,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-gantt';
import {
  TaskFieldsModel,
  SplitterSettingsModel,
} from '@syncfusion/ej2-react-gantt';
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

  const filter: object = {
    params: { showSpinButton: false }
  };

  const taskFilter: object = {
    params: { autofill: false }
  };

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
  };

  return (
    <GanttComponent
      height="370px"
      allowFiltering={true}
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="120" filter={filter} />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" filter={taskFilter} />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>

      <Inject services={[Filter]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));