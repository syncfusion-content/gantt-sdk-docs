import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  let ganttInstance = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 3
  };

  const toolbar = ['Search'];

  function created() {
    const id = ganttInstance ? ganttInstance.element.id + "_searchbar" : "";
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("keyup", (event) => {
        if (ganttInstance) {
          ganttInstance.search(event.target.value);
        }
      });
    }
  }

  return (
    <GanttComponent
      ref={(g) => ganttInstance = g}
      dataSource={data}
      taskFields={taskFields}
      toolbar={toolbar}
      splitterSettings={splitterSettings}
      height="370px"
      created={created}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="400" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>
      <Inject services={[Filter, Toolbar]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));