import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GanttComponent, Edit, Inject, TaskFieldsModel, EditSettingsModel, ActionBeginEventArgs } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';

function App() {
  let ganttObj;
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const editSettings: EditSettingsModel = {
    allowEditing: true,
    allowTaskbarEditing: true
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150', allowEditing: false }
  ];

  function actionBegin(args: ActionBeginEventArgs) {
    if (args.requestType === 'taskbarediting' && (args as any).taskBarEditAction === 'ProgressResizing') {
      args.cancel = true;
    }
  }

  return (
    <GanttComponent height="430px" dataSource={ganttData} taskFields={taskFields} editSettings={editSettings} columns={columns} actionBegin={actionBegin} ref={g => ganttObj = g}>
      <Inject services={[Edit]} />
    </GanttComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));