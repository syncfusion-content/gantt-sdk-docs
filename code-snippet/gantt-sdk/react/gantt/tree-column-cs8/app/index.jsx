import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields = {
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

  let message = '';
  let messageColor = 'black';
  let msgRef;
  const expanding = (args) => {
    const data = args.data;
    if (data) {
      message = `Expanding Task: ${data.TaskName} (ID: ${data.TaskID})`;
      messageColor = 'blue';
      if (data.TaskID === 1) {
        args.cancel = true;
        message = `Expanding cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`;
        messageColor = 'red';
      }
      if (msgRef) {
        msgRef.innerText = message;
        msgRef.style.color = messageColor;
      }
    }
  };

  const collapsing = (args) => {
    const data = args.data;
    if (data) {
      message = `Collapsing Task: ${data.TaskName} (ID: ${data.TaskID})`;
      messageColor = 'orange';
      if (data.TaskID === 5) {
        args.cancel = true;
        message = `Collapsing cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`;
        messageColor = 'red';
      }
      if (msgRef) {
        msgRef.innerText = message;
        msgRef.style.color = messageColor;
      }
    }
  };

  const expanded = (args) => {
    const data = args.data;
    if (data && args.row) {
      message = `Task Expanded: ${data.TaskName} (ID: ${data.TaskID})`;
      messageColor = 'green';
      if (msgRef) {
        msgRef.innerText = message;
        msgRef.style.color = messageColor;
      }
      args.row.style.background = '';
      if ((data.Progress) > 50) {
        args.row.style.background = '#c0f6c7ff';
      }
    }
  };

  const collapsed = (args) => {
    const data = args.data;
    if (data && args.row) {
      message = `Task Collapsed: ${data.TaskName} (ID: ${data.TaskID})`;
      messageColor = 'purple';
      if (msgRef) {
        msgRef.innerText = message;
        msgRef.style.color = messageColor;
      }
      args.row.style.background = '';
      if ((data.Progress) < 50) {
        args.row.style.background = '#fb9c9cff';
      }
    }
  };

  return (
    <div className="control-section">
      <div style={{ marginLeft: '180px' }}>
        <p ref={(el) => (msgRef = el)} id="message"></p>
      </div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskFields}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        expanding={expanding}
        collapsing={collapsing}
        expanded={expanded}
        collapsed={collapsed}
        ref={(gantt) => (ganttRef = gantt)}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));