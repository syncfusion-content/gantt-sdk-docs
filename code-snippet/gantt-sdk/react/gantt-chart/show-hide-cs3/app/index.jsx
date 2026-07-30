import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  let gantt = null;

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '75%'
  };

  const showColumns = () => {
    if (gantt) {
      gantt.showColumn(['TaskName', 'Duration'], 'field');
    }
  };

  const hideColumns = () => {
    if (gantt) {
      gantt.hideColumn(['TaskName', 'Duration'], 'field');
    }
  };

  return (
    <div>
      <ButtonComponent id="show" onClick={showColumns} style={{ marginRight: '10px' }}>
        Show Column
      </ButtonComponent>
      <ButtonComponent id="hide" onClick={hideColumns}>
        Hide Column
      </ButtonComponent>
      <br /><br /><br />
      <GanttComponent
        ref={(g) => (gantt = g)}
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));