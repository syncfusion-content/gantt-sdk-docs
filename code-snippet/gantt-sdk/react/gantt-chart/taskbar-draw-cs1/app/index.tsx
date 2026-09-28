import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  EditSettingsModel,
  LabelSettingsModel,
  Selection
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

  const labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };

  const editSettings: EditSettingsModel = {
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
      allowUnscheduledTasks={true}
      editSettings={editSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskId" headerText="ID" width="80" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
        <ColumnDirective field="StartDate" headerText="Start Date" />
        <ColumnDirective field="EndDate" headerText="End Date" />
        <ColumnDirective field="Duration" headerText="Duration" />
      </ColumnsDirective>
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));