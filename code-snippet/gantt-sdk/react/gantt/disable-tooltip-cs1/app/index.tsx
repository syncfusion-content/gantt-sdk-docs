import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  GanttComponent, TaskFieldsModel, TooltipSettingsModel, BeforeTooltipRenderEventArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate'
  };

  const tooltipSettings: TooltipSettingsModel = {
    showTooltip: true
  };

  const beforeTooltipRender = (args: BeforeTooltipRenderEventArgs): void => {
    if (
      args.args.target.classList.contains('e-gantt-child-taskbar') ||
      args.args.target.classList.contains('e-gantt-parent-taskbar') ||
      args.args.target.classList.contains('e-taskbar-left-resizer') ||
      args.args.target.classList.contains('e-taskbar-right-resizer')
    ) {
      args.cancel = true;
    }
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      tooltipSettings={tooltipSettings}
      beforeTooltipRender={beforeTooltipRender}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));