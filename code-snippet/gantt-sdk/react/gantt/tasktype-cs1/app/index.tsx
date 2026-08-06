
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, ResourceFieldsModel, EditSettingsModel, ColumnModel } from '@syncfusion/ej2-react-gantt';
import { projectData, resources } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    resourceInfo: 'resources',
    work: 'Work',
    parentID: 'ParentID'
  };

  const resourceFields: ResourceFieldsModel = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'Unit'
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const toolbar: string[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];

  const columns: ColumnModel = [
    { field: 'TaskID', visible: false },
    { field: 'TaskName', headerText: 'Task Name', width: '180' },
    { field: 'resources', headerText: 'Resources', width: '160' },
    { field: 'Work', width: '110' },
    { field: 'Duration', width: '100' },
    { field: 'taskType', headerText: 'Task Type', width: '110' }
  ];

  return (
    <GanttComponent
      height="450px"
      dataSource={projectData}
      taskFields={taskFields}
      columns={columns}
      treeColumnIndex={1}
      editSettings={editSettings}
      allowSelection={true}
      projectStartDate={new Date('03/25/2019')}
      projectEndDate={new Date('04/30/2019')}
      highlightWeekends={true}
      toolbar={toolbar}
      resourceFields={resourceFields}
      resources={resources}
      workUnit="Hour"
      taskType="FixedWork"
    >
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));