
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  GanttComponent,  Inject,  Edit,  EditSettingsModel, TooltipSettings, TaskFieldsModel} from '@syncfusion/ej2-react-gantt';

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

  const taskbarTooltipTemplate = (props: any) => {
    return (
      <div>
        <div><b>{props.TaskName}</b></div>
        <div>Duration : {props.Duration}</div>
      </div>
    );
  };

  const tooltipSettings: TooltipSettings = {
    showTooltip: true,
    taskbar: taskbarTooltipTemplate
  };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      editSettings={editOptions}
      tooltipSettings={tooltipSettings}
      height="450px"
    >
      <Inject services={[Edit]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));