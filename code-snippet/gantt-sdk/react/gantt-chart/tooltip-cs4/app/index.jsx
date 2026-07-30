import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
  function tooltipTemplate(props) {
    return (<div>TaskID : {props.TaskID}</div>)
  };
  const template = tooltipTemplate;
  const tooltipSettings = {
    taskbar: template
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    tooltipSettings={tooltipSettings} height='450px'>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));