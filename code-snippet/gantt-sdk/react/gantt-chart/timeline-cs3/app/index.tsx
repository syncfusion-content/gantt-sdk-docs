import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel, TimelineSettingsModel } from '@syncfusion/ej2-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let ganttRef: GanttComponent | null = null;

  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings: TimelineSettingsModel = {
    timelineViewMode: 'Week'
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
  ];

  const goToPreviousTimeSpan = () => {
    if (ganttRef) ganttRef.previousTimeSpan();
  };

  const goToNextTimeSpan = () => {
    if (ganttRef) ganttRef.nextTimeSpan();
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <ButtonComponent style={{ marginRight: '10px' }} onClick={goToPreviousTimeSpan}>Previous Week</ButtonComponent>
        <ButtonComponent onClick={goToNextTimeSpan}>Next Week</ButtonComponent>
      </div>
      <GanttComponent
        ref={gantt => ganttRef = gantt}
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        timelineSettings={timelineSettings}
        columns={columns}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="150" />
          <ColumnDirective field="Progress" headerText="Progress" width="150" />
        </ColumnsDirective>
        <Inject services={[]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));