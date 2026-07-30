import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data

 } from './datasource';
function App() {
  let ganttInstance;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };
  function tooltipTemplate(props) {
    return (<div>Baseline StartDate : {ganttInstance.getFormatedDate(props.BaselineStartDate)}</div>)
  };
  const template = tooltipTemplate;
  const tooltipSettings = {
    baseline: template
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    tooltipSettings={tooltipSettings} renderBaseline={true} baselineColor="red" height='450px' ref={gantt => ganttInstance = gantt}>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));