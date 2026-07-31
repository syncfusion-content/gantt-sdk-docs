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
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null = null;

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

  const toolbar: ToolbarItem[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];

  return (
    <div>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        editSettings={editSettings}
        toolbar={toolbar}
        ref={(gantt) => (ganttInstance = gantt)}>
        <Inject services={[Edit, Toolbar, Selection, Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));