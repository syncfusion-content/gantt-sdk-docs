import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, EditSettingsModel, TaskFieldsModel, ActionBeginEventArgs } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';

function App() {

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true
  };

  const toolbarItems: string[] = ['Add'];

  function onActionBegin(args: ActionBeginEventArgs): void {
    if (args.requestType === 'beforeOpenAddDialog') {
      args.rowData.TaskName = 'Gantt';
      args.rowData.Progress = 70;

      if (args.rowData.ganttProperties) {
        args.rowData.ganttProperties.taskName = 'Gantt';
        args.rowData.ganttProperties.progress = 70;
      }
    }
  }

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={ganttData}
      taskFields={taskFields}
      editSettings={editSettings}
      toolbar={toolbarItems}
      actionBegin={onActionBegin}
    >
      <Inject services={[Toolbar, Edit]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));