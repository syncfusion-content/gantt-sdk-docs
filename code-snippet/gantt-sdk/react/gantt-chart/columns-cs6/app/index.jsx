import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttData } from './datasource';

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

  const updateColumns = () => {
    if (gantt) {
      const columns = gantt.treeGrid.columns;
      if (columns && columns.length > 0) {
        columns[0].textAlign = 'Center';
        columns[0].width = '100';
        columns[2].visible = false;
        columns[1].customAttributes = { class: 'customcss' };
        gantt.treeGrid.refreshColumns();
      }
    }
  };

  return (
    <div>
      <ButtonComponent cssClass="e-info" style={{ marginBottom: '20px' }} onClick={updateColumns}>
        Update Columns
      </ButtonComponent>
      <GanttComponent
        ref={(g) => (gantt = g)}
        height="430px"
        dataSource={GanttData}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));