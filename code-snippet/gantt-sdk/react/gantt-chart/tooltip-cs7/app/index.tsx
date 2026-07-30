import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data

 } from './datasource';
function App() {
  let ganttInstance: GanttComponent;
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };
  function tooltipTemplate(props: any) {
    return (<div>Baseline StartDate : {ganttInstance.getFormatedDate(props.BaselineStartDate)}</div>)
  };
  const template: any = tooltipTemplate;
  const tooltipSettings: any = {
    baseline: template
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    tooltipSettings={tooltipSettings} renderBaseline={true} baselineColor="red" height='450px' ref={gantt => ganttInstance = gantt}>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));