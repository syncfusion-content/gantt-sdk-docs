import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  function tooltipTemplate(props: any) {
    return (<div>Offset : {props.offsetString}</div>)
  };
  const template: any = tooltipTemplate;
  const tooltipSettings: any = {
    connectorLine: template
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    tooltipSettings={tooltipSettings} height='450px'>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
      <ColumnDirective field='Predecessor'></ColumnDirective>
    </ColumnsDirective>
  </GanttComponent>

};
ReactDOM.render(<App />, document.getElementById('root'));