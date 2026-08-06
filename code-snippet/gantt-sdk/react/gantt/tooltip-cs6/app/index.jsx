import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editOptions = {
    allowTaskbarEditing: true
  };

  const taskbarTooltipTemplate = (props) => {
    return (
      <div>
        <div><b>{props.TaskName}</b></div>
        <div>Duration : {props.Duration}</div>
      </div>
    );
  };

  const tooltipSettings = {
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