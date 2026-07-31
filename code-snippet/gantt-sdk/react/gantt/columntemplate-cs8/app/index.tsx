
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = { position: '75%' };

  const discontinuedTemplate = (props: { Discontinued: boolean }): React.ReactElement => (
    <input type="checkbox" checked={props.Discontinued} readOnly />
  );

  return (
    <GanttComponent height="430px" dataSource={GanttData} taskFields={taskFields} treeColumnIndex={1} splitterSettings={splitterSettings}>
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective field="Discontinued" headerText="Discontinued" width="150" textAlign="Center" template={discontinuedTemplate} />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));