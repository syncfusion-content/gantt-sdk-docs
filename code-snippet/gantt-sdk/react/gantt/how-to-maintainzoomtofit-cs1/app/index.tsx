import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ActionCompleteArgs, ITaskbarEditedEventArgs, EditSettingsModel, ToolbarItem, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const toolbar: ToolbarItem[] = ['Edit', 'ZoomToFit'];

  const editSettings: EditSettingsModel = {
    allowEditing: true,
    allowTaskbarEditing: true
  };

  let ganttInstance: GanttComponent | null;

  function actionComplete(args: ActionCompleteArgs): void {
    if ((args.action === 'CellEditing' || args.action === 'DialogEditing') && args.requestType === 'save') {
      if (ganttInstance) {
        ganttInstance.dataSource = data;
        ganttInstance.fitToProject();
      }
    }
  }

  function taskbarEdited(args: ITaskbarEditedEventArgs): void {
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