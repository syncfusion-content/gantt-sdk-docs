import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, SplitterSettingsModel, ColumnModel } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {

  let ganttInstance: GanttComponent = null;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };

  const toolbar: any = ['Search'];

  const dropData: object[] = [
    { id: 'Parent', mode: 'Parent' },
    { id: 'Child', mode: 'Child' },
    { id: 'Both', mode: 'Both' },
    { id: 'None', mode: 'None' }
  ];

  const fields: object = { text: 'mode', value: 'id' };

  function onChange(e: ChangeEventArgs): void {
    const mode: any = e.value;
    ganttInstance.filterSettings.hierarchyMode = mode;
    ganttInstance.searchSettings.hierarchyMode = mode;
    ganttInstance.clearFiltering();
  }

  return (
    <div>
      <div style={{ paddingTop: '7px', paddingBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label style={{ fontWeight: 'bold' }}>Hierarchy Mode:</label>
        <DropDownListComponent change={onChange} dataSource={dropData} fields={fields} value="Parent" width="200px"/>
      </div>

      <GanttComponent
        ref={(g) => (ganttInstance = g)}
        height="370px"
        allowFiltering={true}
        dataSource={data}
        taskFields={taskFields}
        toolbar={toolbar}
        splitterSettings={splitterSettings}
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