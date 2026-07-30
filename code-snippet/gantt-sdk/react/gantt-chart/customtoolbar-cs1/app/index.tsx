import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  Inject,
  Edit,
  Toolbar,
  Selection,
  Filter,
  TaskFieldsModel,
  EditSettingsModel,
  ToolbarItem
} from '@syncfusion/ej2-react-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null = null;
  let message = '';

  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };

  const toolbar: ToolbarItem[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const toolbarClick = (args: ClickEventArgs): void => {
    console.log(args.item.id);
    if (args.item.id === 'ganttDefault_add') {
      args.cancel = true;
      const newRecord = {
        TaskID: Math.floor(Math.random() * 100),
        TaskName: 'New Task',
        StartDate: new Date(),
        EndDate: new Date(),
        Duration: 1,
        Progress: 0
      };
      if (ganttInstance) {
        ganttInstance.addRecord(newRecord);
      }
      message = 'The default add action was cancelled. A new task was added using `addRecord()`.';
      const msgElement = document.getElementById('message');
      if (msgElement) {
        msgElement.textContent = message;
      }
    }
  };

  return (
    <div>
      <div style={{ margin: '20px 0 10px 20px' }}>
        <p style={{ color: 'red' }} id="message">{message}</p>
      </div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        editSettings={editSettings}
        toolbar={toolbar}
        toolbarClick={toolbarClick}
        ref={(gantt) => (ganttInstance = gantt)}>
        <Inject services={[Edit, Toolbar, Selection, Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));