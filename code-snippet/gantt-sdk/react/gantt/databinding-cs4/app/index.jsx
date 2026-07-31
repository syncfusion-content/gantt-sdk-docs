import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { DataManager } from '@syncfusion/ej2-data';

function App() {

  let ganttRef = null;
  let messageRef = null;

  const data = new DataManager({
    url: 'http://some.com/invalidUrl'
  });

  const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  function actionFailure(args) {
    if (messageRef) {
      messageRef.innerHTML = 'Server exception: 404 Not found';
      messageRef.style.color = '#FF0000';
    }
  }

  return (
    <div>
      <p ref={(p) => { messageRef = p; }}></p>

      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskFields}
        actionFailure={actionFailure}
        ref={(g) => { ganttRef = g; }}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskId" headerText="Task ID" width="120" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="180" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="120" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>

        <Inject services={[Toolbar, ExcelExport, Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));