
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = { position: '75%' };

  const formatProgressTemplate = (props) => (
    <span>{props.Progress ? props.Progress.toFixed(3) + '%' : '0%'}</span>
  );

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={GanttData}
      taskFields={taskFields}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="TaskID" width="80" />
        <ColumnDirective field="TaskName" headerText="TaskName" width="290" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" template={formatProgressTemplate} />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));