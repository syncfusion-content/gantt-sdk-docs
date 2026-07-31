import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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

  const splitterSettings = {
    columnIndex: 2
  };

  const searchSettings = {
    operator: 'contains'
  };

  const toolbar = ['Search'];

  const ddlData = [
    { text: 'Contains', value: 'contains' },
    { text: 'Starts With', value: 'startswith' },
    { text: 'Ends With', value: 'endswith' },
    { text: 'Equal', value: 'equal' },
    { text: 'Not Equal', value: 'notequal' }
  ];

  const fields = { text: 'text', value: 'value' };

  function valueChange(e) {
    searchSettings.operator = e.value;
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Change the search operator:</label>
        <DropDownListComponent dataSource={ddlData} fields={fields} value={searchSettings.operator} width="150px" change={valueChange} />
      </div>

      <GanttComponent
        dataSource={data}
        taskFields={taskFields}
        splitterSettings={splitterSettings}
        searchSettings={searchSettings}
        toolbar={toolbar}
        height="370px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="150" />
          <ColumnDirective field="Progress" headerText="Progress" width="150" />
        </ColumnsDirective>
        <Inject services={[Filter, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));