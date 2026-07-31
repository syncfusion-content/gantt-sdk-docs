import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const toolbar = ['Edit', 'ZoomToFit'];

  const editSettings = {
    allowEditing: true,
    allowTaskbarEditing: true
  };

  let ganttInstance;

  function actionComplete(args) {
    if ((args.action === 'CellEditing' || args.action === 'DialogEditing') && args.requestType === 'save') {
      if (ganttInstance) {
        ganttInstance.dataSource = data;
        ganttInstance.fitToProject();
      }
    }
  }

  function taskbarEdited(args) {
    if (args && ganttInstance) {
      ganttInstance.dataSource = data;
      ganttInstance.fitToProject();
    }
  }

  return (
    <GanttComponent
      ref={g => ganttInstance = g}
      id="ganttDefault"
      height="430px"
      dataSource={data}
      taskFields={taskFields}
      toolbar={toolbar}
      editSettings={editSettings}
      actionComplete={actionComplete}
      taskbarEdited={taskbarEdited}>
      <Inject services={[Edit, Selection, Toolbar]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));