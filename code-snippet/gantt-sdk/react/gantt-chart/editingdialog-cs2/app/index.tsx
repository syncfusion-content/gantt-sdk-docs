import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, TaskFieldsModel, EditSettingsModel, LabelSettingsModel, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data, ProjectResources } from './datasource';

function App() {
  let taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
    notes: 'info',
    resourceInfo: 'resources'
  };
  let editDialogFields: object[] = [
    { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'isParent'] },
    { type: 'Dependency' },
    { type: 'Resources' }
  ];
  let resourceFields: object = { id: 'resourceId', name: 'resourceName' };
  let editSettings: EditSettingsModel = { allowAdding: true, allowEditing: true, mode: 'Dialog', allowTaskbarEditing: true };
  let labelSettings: LabelSettingsModel = { leftLabel: 'TaskName', rightLabel: 'resources' };
  let toolbar: string[] = ['Add'];
  let projectStartDate: Date = new Date('03/28/2019');
  let projectEndDate: Date = new Date('04/14/2019');

  return (
    <GanttComponent height="430px"
      dataSource={data}
      taskFields={taskSettings} editDialogFields={editDialogFields} editSettings={editSettings}
      resourceFields={resourceFields} resources={ProjectResources}
      labelSettings={labelSettings} toolbar={toolbar}
      projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
      <Inject services={[Edit, Toolbar]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));