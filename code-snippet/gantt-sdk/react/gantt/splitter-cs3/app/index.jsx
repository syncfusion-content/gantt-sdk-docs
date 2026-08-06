
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let ganttRef = null;

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const dropData = [
    { id: 'Default', mode: 'Default' },
    { id: 'Grid', mode: 'Grid' },
    { id: 'Chart', mode: 'Chart' }
  ];

  const fields = { text: 'mode', value: 'id' };

  const changeByPosition = () => {
    ganttRef.setSplitterPosition('50%', 'position');
  };

  const changeByIndex = () => {
    ganttRef.setSplitterPosition(1, 'columnIndex');
  };

  const onChange = (e) => {
    let viewType = e.value;
    ganttRef.setSplitterPosition(viewType, 'view');
  };

  return (
    <div>
      <ButtonComponent id="changeByPosition" onClick={changeByPosition}>Change By Position</ButtonComponent>
      <br /><br />
      <ButtonComponent id="changeByIndex" onClick={changeByIndex}>Change By Index</ButtonComponent>
      <br />
      <div style={{ paddingTop: '7px', display: 'inline-block' }}>
        Splitter View
        <DropDownListComponent
          dataSource={dropData}
          value="Default"
          fields={fields}
          change={onChange}>
        </DropDownListComponent>
      </div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        ref={gantt => ganttRef = gantt}>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));