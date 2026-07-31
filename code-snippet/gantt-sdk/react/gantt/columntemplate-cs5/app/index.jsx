import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    priority: 'Priority',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '75%'
  };

  const dropData = ['High', 'Medium', 'Low'];

  const dropDownTemplate = (props) => {
    return (
      <DropDownListComponent
        value={props.Priority}
        dataSource={dropData}
        width="100"
        popupHeight="150px"
        popupWidth="150px"
      />
    );
  };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      treeColumnIndex={1}
      height="430px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective field="Priority" headerText="Task Priority" width="200" template={dropDownTemplate} />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));