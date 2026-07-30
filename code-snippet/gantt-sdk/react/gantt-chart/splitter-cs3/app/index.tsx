
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let ganttRef: GanttComponent | null = null;

  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const dropData: Object[] = [
    { id: 'Default', mode: 'Default' },
    { id: 'Grid', mode: 'Grid' },
    { id: 'Chart', mode: 'Chart' }
  ];

  const fields: Object = { text: 'mode', value: 'id' };

  const changeByPosition = (): void => {
    ganttRef.setSplitterPosition('50%', 'position');
  };

  const changeByIndex = (): void => {
    ganttRef.setSplitterPosition(1, 'columnIndex');
  };

  const onChange = (e: ChangeEventArgs): void => {
    let viewType: string = e.value as string;
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